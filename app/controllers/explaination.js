import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  quiz: service(),

  actions: {
    start_quiz() {
      this.get('quiz').open_question();
      this.transitionToRoute('quiz_screen');
    }
  }
});
