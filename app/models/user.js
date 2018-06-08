import DS from 'ember-data';

export default DS.Model.extend({
  uniq_id: DS.attr('string'),
  realname: DS.attr('string'),
  codename: DS.attr('string')
});
