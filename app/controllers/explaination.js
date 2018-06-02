import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  quiz: service(),

  finished_quiz: alias('model.question.finished'),

  actions: {
    start_quiz() {
      if (this.get('finished_quiz')) {
        this.transitionToRoute('results');
      } else {
        this.get('quiz').open_question();
        this.transitionToRoute('quiz_screen');
      }
    }
  }
});
