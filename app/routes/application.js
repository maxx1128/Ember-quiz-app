import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      question: this.store.findRecord('question', 1),
      answers: this.store.findAll('answer')
    });
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
