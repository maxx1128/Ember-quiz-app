import DS from 'ember-data';

export default DS.Model.extend({
  realname: DS.attr('string'),
  codename: DS.attr('string')
});
