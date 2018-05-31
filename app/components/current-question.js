import Component from '@ember/component';
import questions from './../data/questions';
import { computed } from '@ember/object';

export default Component.extend({
  question_text: computed('questions_data', 'question_number', function(){
    let question = this.get('questions_data').objectAt(this.get('question_number'));

    return question.text;
  }),

  questions_data: questions
});
