import Component from '@ember/component';
import questions from './../data/questions';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  quiz: service(),

  answers: computed('questions_data', 'question_number', function(){
    let question = this.get('questions_data').objectAt(this.get('question_number'));

    console.log(question);

    return question.answers;
  }),

  actions: {
    select_answer(user, question_number, correct) {
      let points = correct ? 5 : 0;

      this.set('answered_state', true);
      this.get('quiz').submit_answer(user, question_number, correct, points);
    }
  },

  questions_data: questions
});
