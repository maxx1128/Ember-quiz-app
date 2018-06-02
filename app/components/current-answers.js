import Component from '@ember/component';
import questions from './../data/questions';
import { inject as service } from '@ember/service';
import { computed, get } from '@ember/object';

export default Component.extend({
  quiz: service(),

  answers: computed('questions_data', 'question_number', function(){
    let question = this.get('questions_data').objectAt(this.get('question_number'));

    return question.answers;
  }),

  actions: {
    select_answer(user, question_number, correct) {

      const all_users = this.get('users_who_answered').reduce(function(usernames, user) {
        usernames.push(get(user, 'user_codename'));

        return usernames;
      }, []);

      const current_user_didnt_answer = !(all_users.includes(get(user, 'code_name')));

      if (current_user_didnt_answer) {
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
