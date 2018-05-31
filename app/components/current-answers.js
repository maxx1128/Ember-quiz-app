import Component from '@ember/component';
import questions from './../data/questions';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  quiz: service(),

  answers: computed('questions_data', 'question_number', function(){
    let question = this.get('questions_data').objectAt(this.get('question_number'));

    return question.answers;
  }),

  actions: {
    select_answer(user, question_number, correct) {
      let final_points,
          base_points = 5,
          timing_limit = 10,
          current_answers = this.get('number_of_answers'),
          timing_rank = ((timing_limit - current_answers) / 2);

      if ((current_answers < timing_limit) && (timing_rank >= 1)) {
        base_points = correct ? 5 : -2.5;
        
        final_points = (base_points * timing_rank);
      } else {
        final_points = correct ? base_points : 0;
      }

      console.log(timing_rank);
      console.log(final_points);

      this.set('answered_state', true);
      this.get('quiz').submit_answer(user, question_number, correct, final_points);
    }
  },

  questions_data: questions
});
