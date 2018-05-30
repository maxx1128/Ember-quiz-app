import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | waiting', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:waiting');
    assert.ok(route);
  });
});
