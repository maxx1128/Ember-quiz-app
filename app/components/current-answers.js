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
      usernames.push(get(user, 'uniq_id'));

      return usernames;
    }, []);

    console.log(get(this.get('user'), 'uniq_id'));

    return !(all_users.includes(get(this.get('user'), 'uniq_id')));
  }),

  user_secretly_answered: computed('answered_state', 'current_user_didnt_answer', function(){
    const game_expects_an_answer = !(this.get('answered_state')),
          user_already_answered = !(this.get('current_user_didnt_answer'));

    return game_expects_an_answer && user_already_answered;
  }),

  actions: {
    select_answer(user, question_number, correct) {
      this.get('quiz').submit_answer(user, question_number, correct, this.get('number_of_answers'), this.get('current_user_didnt_answer'));
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
