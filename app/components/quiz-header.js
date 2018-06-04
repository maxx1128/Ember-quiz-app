import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  quiz: service(),

  admin_logged_in: computed('quiz', function() {
    return this.get('quiz').logged_in;
  })
});
