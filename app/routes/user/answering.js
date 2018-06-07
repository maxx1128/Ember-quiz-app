import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
  user: service(),
  store: service(),

  model(params) {
    return this.get('store').query('user', { orderBy: 'codename', equalTo: params.codename }).then((user) => {

      return hash({
        question: this.store.findRecord('question', 1),
        answers: this.store.findAll('answer'),
        user: user.get('content')[0]._data || false
      });

    }).catch(function(){
      return {
        user: false
      };
    });
  },


  afterModel(model) {
    if (!model.user) {
      this.transitionTo('user.new');
    } else {
      this.get('user').set_names(model.user.realname, model.user.codename)
    }
  }
});
