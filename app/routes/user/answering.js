import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  user: service(),

  afterModel() {
    const no_created_user = get(this.get('user'), 'no_created_user');

    if (no_created_user) { this.transitionTo('user.new'); }
  }
});
