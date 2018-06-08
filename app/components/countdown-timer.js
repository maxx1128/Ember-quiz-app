import Component from '@ember/component';
import { later } from '@ember/runloop';
import { computed } from '@ember/object';

// limit, event_on_finish

export default Component.extend({
  init(){
    this._super(...arguments);
    this.set('count', this.get('limit'));
    this.tick();
  },

  finished: false,

  timer_color: computed('count', function(){
    const count = this.get('count'),
          limit = this.get('limit');

    if (count > (limit * 0.6)) {
      return 'text-green-dark';
    } else if (count > (limit * 0.25)) {
      return 'text-yellow-dark';
    } else {
      return 'text-red-dark';
    }
  }),

  tick() {
    const count = this.get('count');

    later(this, function(){
      if (count === 0) {
        this.set('finished', true);
        this.event_on_finish();
      } else {
        this.decrementProperty('count');
        this.tick();
        // Play a JS sound here?
      }
    }, 1000);
  }
});
