import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',

  ranking_class: computed('user.correct', 'show_points', 'results_state', function() {
    let positive_state;

    if (this.get('results_state')) {
      positive_state = (this.get('user.points') >= 0);
    } else {
      positive_state = this.get('user.correct');
    }

    let ranking_class = (positive_state ? 'bg-blue-lighter' : 'bg-red-lighter');

    return this.get('show_points') ? ranking_class : 'bg-purple-lightest';
  })
});
