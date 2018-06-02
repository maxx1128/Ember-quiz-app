import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  state: DS.attr('string'),
  finished: DS.attr('boolean')
});
