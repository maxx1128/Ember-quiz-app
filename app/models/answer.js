import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  uniq_id: DS.attr('string'),
  question: DS.attr('number'),
  user_codename: DS.attr('string'),
  user_realname: DS.attr('string'),
  correct: DS.attr('boolean'),
  points: DS.attr('number'),

  avatar_url: computed('user_codename', function(){
    const user_codename = this.get('user_codename');

    return `https://robohash.org/${user_codename}?set=set4`;
  })
});
