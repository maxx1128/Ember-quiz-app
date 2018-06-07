import Component from '@ember/component';
import questions from './../data/questions';
import { computed } from '@ember/object';

export default Component.extend({
  question_object: computed('questions_data', 'question_number', function(){
    return this.get('questions_data').objectAt(this.get('question_number'));
  }),

  answer: computed('question_object', function() {
    let answers = this.get('question_object').answers,
        correct_answers = answers.filter(item => (item.correct));

    return correct_answers[0].text;
  }),

  questions_data: questions
});
