import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  quiz: service(),

  showing_rankings: false,
  question_state: alias('model.question.state'),
  question_number: alias('model.question.number'),

  users_who_answered: computed('question_number', function() {
    let question_number = this.get('question_number');

    return this.get('model.answers').filterBy('question', question_number);
  }).property('model.answers.@each'),

  next_question_number: computed('question_number', function(){
    return (this.get('question_number') + 1);
  }),

  actions: {
    close_question() {
      this.get('quiz').close_question();
      this.set('showing_rankings', true);
    },

    go_to_next_question() {
      if (this.get('question_state') === 'closed') {
        this.get('quiz').update_question_number(this.get('next_question_number'));
        this.set('showing_rankings', false);
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
