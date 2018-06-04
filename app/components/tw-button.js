import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Component.extend({
  tagName: '',
  classes: computed('class_names', function() {
    const extra_classes = this.get('class_names');

    return `${extra_classes} inline-block bg-blue-dark hover:bg-blue-darker text-white py-2 px-4 rounded-lg no-underline`;
  })
});
