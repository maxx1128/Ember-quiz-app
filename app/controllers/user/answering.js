import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: service(),
  quiz: service(),

  actions: {
    submit_answer(user) {
      this.get('quiz').submit_answer(user);
    },

    delete_qs() {
      this.get('quiz').delete_all_qs();
    }
  }
});
