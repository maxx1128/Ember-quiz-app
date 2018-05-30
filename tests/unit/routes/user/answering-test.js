import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | user/answering', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:user/answering');
    assert.ok(route);
  });
});
