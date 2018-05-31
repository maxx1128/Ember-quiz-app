import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  quiz: service(),

  question_state: alias('model.question.state'),
  question_number: alias('model.question.number'),

  showing_rankings: computed('question_state', function() {
    return (this.get('question_state') === 'closed') ? true : false;
  }),

  users_who_answered: computed('question_number', function() {
    return this.get('quiz').get_users_who_answered(this.get('question_number'), this.get('model.answers'));
  }).property('model.answers.@each'),

  next_question_number: computed('question_number', function(){
    return (this.get('question_number') + 1);
  }),

  actions: {
    close_question() {
      this.get('quiz').close_question();
    },

    go_to_next_question() {
      if (this.get('question_state') === 'closed') {
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
  }
});
