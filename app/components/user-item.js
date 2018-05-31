import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  ranking_class: computed('user.correct', 'show_ranking', function() {
    if (this.get('show_ranking')) {
      let correct = this.get('user.correct');

      return correct ? 'bg-blue' : 'bg-red';
    } else {
      return '';
    }
  })
});
