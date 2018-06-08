import Service from '@ember/service';
import { inject as service } from '@ember/service';
import ENV from './../config/environment';

export default Service.extend({
  store: service(),

  logged_in: false,

  log_in: function(username, password) {

    const saved_username = ENV.username,
          saved_password = ENV.password,
          correct_username = (saved_username === username),
          correct_password = (saved_password === password);

    if (correct_username && correct_password) {
      this.set('logged_in', true);
    } else {
      this.set('logged_in', false);
    }
  },

  submit_answer(user, question_number, correct, current_answers, user_can_answer) {
    if (user_can_answer) {
      let final_points,
          store = this.get('store'),
          base_points = 5,
          timing_limit = 15,
          timing_rank = ((timing_limit - current_answers) / 2);

      if ((current_answers < timing_limit) && (timing_rank >= 1)) {
        base_points = correct ? 4 : -2;

        final_points = (base_points * timing_rank);
      } else {
        final_points = correct ? base_points : 0;
      }

      store.createRecord('answer', {
        uniq_id: user.uniq_id,
        question: question_number,
        user_codename: user.code_name,
        user_realname: user.real_name,
        correct: correct,
        points: final_points
      }).save();
    }
  },

  get_users_who_answered: function(question_number, users) {
    return users.filterBy('question', question_number);
  },

  finish_quiz: function() {
    this.get('store').findRecord('question', 1).then(function(question) {
      question.set('finished', true);
      question.save();
    });
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
      question.set('state', 'closed');
      question.set('finished', false);
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

  delete_all_users: function() {
    this.get('store').findAll('user').then(function(user){
      user.forEach(function(rec) {
        rec.deleteRecord();
        rec.save();
      });
      user.save();
    });
  }
});
