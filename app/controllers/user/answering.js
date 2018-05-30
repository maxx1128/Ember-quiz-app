import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: service(),
  quiz: service(),

  actions: {
    next_question(user) {
      this.get('quiz').next_question(user);
    },

    delete_qs() {
      this.get('quiz').delete_all_qs();
    }
  }
});
