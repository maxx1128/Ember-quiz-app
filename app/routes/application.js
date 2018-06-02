import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  quiz: service(),

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
