import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  quiz: service(),

  failed_login: false,

  actions: {
    login(username, password) {
      this.get('quiz').log_in(username, password);

      if (this.get('quiz').logged_in) {
        this.set('failed_login', false);
        this.transitionToRoute('index');
      } else {
        this.set('failed_login', true);
      }
    }
  }
});
