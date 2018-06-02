import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  quiz: service(),

  afterModel() {
    if (this.get('quiz').logged_in) { this.transitionTo('index'); }
  }
});
