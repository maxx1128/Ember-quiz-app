import Component from '@ember/component';
import questions from './../data/questions';
import { inject as service } from '@ember/service';
import { computed, get } from '@ember/object';

export default Component.extend({
  quiz: service(),
  store: service(),

  answers: computed('questions_data', 'question_number', function(){
    let question = this.get('questions_data').objectAt(this.get('question_number'));

    return shuffle(question.answers);
  }),

  current_user_didnt_answer: computed('users_who_answered', 'user', function(){
    const all_users = this.get('users_who_answered').reduce(function(usernames, user) {
      usernames.push(get(user, 'user_codename'));

      return usernames;
    }, []);

    return !(all_users.includes(get(this.get('user'), 'code_name')));
  }),

  user_secretly_answered: computed('answered_state', 'current_user_didnt_answer', function(){
    const game_expects_an_answer = !(this.get('answered_state')),
          user_already_answered = !(this.get('current_user_didnt_answer'));

    return game_expects_an_answer && user_already_answered;
  }),

  actions: {
    select_answer(user, question_number, correct) {
      if (this.get('current_user_didnt_answer')) {
        let final_points,
            base_points = 5,
            timing_limit = 15,
            current_answers = this.get('number_of_answers'),
            timing_rank = ((timing_limit - current_answers) / 2);

        if ((current_answers < timing_limit) && (timing_rank >= 1)) {
          base_points = correct ? 4 : -2;

          final_points = (base_points * timing_rank);
        } else {
          final_points = correct ? base_points : 0;
        }

        this.get('quiz').submit_answer(user, question_number, correct, final_points);
      }

      this.set('answered_state', true);
    }
  },

  questions_data: questions
});

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}
