import Service from '@ember/service';
import { computed } from '@ember/object';
import questions from './../data/questions';

import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),
  current_q_number: 0,

  current_q: computed('questions_data', 'current_q_number', function(){
    return this.get('questions_data').objectAt(this.get('current_q_number'));
  }),

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

  delete_all_qs: function() {
    this.get('store').findAll('answer').then(function(answer){
      answer.forEach(function(rec) {
        rec.deleteRecord();
        rec.save();
      });
      answer.save();
    });
  },

  questions_data: questions
});
