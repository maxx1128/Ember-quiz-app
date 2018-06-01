import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import questions from './../data/questions';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  quiz: service(),

  question_state: alias('model.question.state'),
  question_number: alias('model.question.number'),

  question_is_closed: computed('question_state', function() {
    return (this.get('question_state') === 'closed') ? true : false;
  }),

  next_question_number: computed('question_number', function(){
    return (this.get('question_number') + 1);
  }),

  users_who_answered: computed('question_number', function() {
    return this.get('quiz').get_users_who_answered(this.get('question_number'), this.get('model.answers'));
  }).property('model.answers.@each'),

  last_question: computed('questions_data', 'next_question_number', function(){
      let total_questions = this.get('questions_data').length,
          next_question = this.get('next_question_number');

      return (next_question === total_questions);
  }),

  actions: {
    close_question() {
      this.get('quiz').close_question();
    },

    go_to_next_question() {
      if (this.get('last_question')) {
        this.transitionToRoute('results');
      } else if (this.get('question_state') === 'closed') {
        this.get('quiz').update_question_number(this.get('next_question_number'));
        this.get('quiz').open_question();
      }

      this.notifyPropertyChange('users_who_answered');
    },

    reset_quiz_state() {
      this.get('quiz').reset_quiz_state();
      // this.get('quiz').delete_all_qs();

      this.notifyPropertyChange('users_who_answered');
    }
  },

  questions_data: questions
});
