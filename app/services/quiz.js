import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),

  submit_answer: function(user, q_number, correct, points) {
    let store = this.get('store');

    store.createRecord('answer', {
      question: q_number,
      user_codename: user.code_name,
      user_realname: user.real_name,
      correct: correct,
      points: points
    }).save();
  },

  update_question_number: function(number) {
    this.get('store').findRecord('question', 1).then(function(question) {
      question.set('number', number);
      question.save();
    });
  },

  close_question: function() {
    this.get('store').findRecord('question', 1).then(function(question) {
      question.set('state', 'closed');
      question.save();
    });
  },

  open_question: function() {
    this.get('store').findRecord('question', 1).then(function(question) {
      question.set('state', 'open');
      question.save();
    });
  },

  reset_quiz_state: function() {
    this.get('store').findRecord('question', 1).then(function(question) {
      question.set('number', 0);
      question.set('state', 'open');
      question.save();
    });
  },

  delete_all_qs: function() {
    this.get('store').findAll('answer').then(function(answer){
      answer.forEach(function(rec) {
        rec.deleteRecord();
        rec.save();
      });
      answer.save();
    });
  },
});
