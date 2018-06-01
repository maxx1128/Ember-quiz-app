import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed, get } from '@ember/object';

export default Controller.extend({
  quiz: service(),

  user_results: computed('model.answers', function(){
    return this.get('quiz').get_users_point_tally(this.get('model.answers'));
  }).property('model.answers.@each')
});
