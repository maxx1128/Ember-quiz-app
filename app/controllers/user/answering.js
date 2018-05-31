import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed, observer } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  user: service(),
  quiz: service(),

  // Also need to the global state if the question is open or not
  // Use setupController to pass the model here?
  answered_state: false,
  question_state: alias('model.question.state'),
  question_number: alias('model.question.number'),

  users_who_answered: computed('question_number', function() {
    return this.get('quiz').get_users_who_answered(this.get('question_number'), this.get('model.answers'));
  }).property('model.answers.@each'),

  showing_hold_screen: computed('question_state', 'answered_state', function(){
    let answered_question = this.get('answered_state'),
        not_open_question = (this.get('question_state') !== 'open');

    return (answered_question || not_open_question);
  }),

  update_for_next_question: observer('question_number', 'question_state', function() {
    if (this.get('question_state') === 'open') { this.set('answered_state', false); }
  }),

  // Pull the list of answered users from this question, and see how long it is. If it's under a certain length, use that to scale the amount of points that would normally be entered
  // Base point value is determined if it's correct or not. Scaling is based on the list.

  actions: {
    submit_answer(user, q_number, correct, points) {
      if ((this.get('question_state') === 'open') && (this.get('answered_state') === false) ) {
        this.get('quiz').submit_answer(user, q_number, correct, points);
        this.set('answered_state', true);
      }
    },

    reset_quiz_state() {
      this.get('quiz').reset_quiz_state();
      this.get('quiz').delete_all_qs();
    }
  }
});
