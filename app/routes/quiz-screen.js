import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  quiz: service(),

  afterModel() {
    const logged_in = this.get('quiz').logged_in;
    if (!logged_in) { this.transitionTo('login'); }
  }
});
