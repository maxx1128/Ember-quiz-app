import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('number'),
  user_codename: DS.attr('string'),
  user_realname: DS.attr('string'),
  correct: DS.attr('boolean'),
  points: DS.attr('number')
});