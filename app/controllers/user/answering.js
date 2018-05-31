import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed, get, observer } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  user: service(),
  quiz: service(),

  // Also need to the global state if the question is open or not
  // Use setupController to pass the model here?
  answered_state: false,
  question_state: alias('model.question.state'),
  question_number: alias('model.question.number'),

  next_question_number: computed('question_number', function(){
    return (this.get('question_number') + 1);
  }),

  showing_hold_screen: computed('question_state', 'answered_state', function(){
    let answered_question = this.get('answered_state'),
        not_open_question = (this.get('question_state') !== 'open');

    return (answered_question || not_open_question);
  }),

  update_for_next_question: observer('question_number', 'question_state', function() {
    if (this.get('question_state') === 'open') { this.set('answered_state', false); }
  }),

  actions: {
    submit_answer(user, q_number, correct, points) {
      if ((this.get('question_state') === 'open') && (this.get('answered_state') === false) ) {
        this.get('quiz').submit_answer(user, q_number, correct, points);
        this.set('answered_state', true);
      }
    },

    go_to_next_question() {
      if (this.get('question_state') === 'closed') {
        this.get('quiz').update_question_number(this.get('next_question_number'));
        this.set('answered_state', false);
      }
    },

    reset_quiz_state() {
      this.get('quiz').reset_quiz_state();
      this.get('quiz').delete_all_qs();
    }
  }
});
