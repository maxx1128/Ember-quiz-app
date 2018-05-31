import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: service(),
  quiz: service(),

  // Also need to the global state if the question is open or not
  // Use setupController to pass the model here?
  answered: false,

  actions: {
    submit_answer(user, q_number, correct, points) {
      this.get('quiz').submit_answer(user, q_number, correct, points);
      this.set('answered', true);
    },

    update_question(number) {
      this.get('quiz').update_question_number(number);
    },

    delete_qs() {
      this.get('quiz').delete_all_qs();
    }
  }
});
