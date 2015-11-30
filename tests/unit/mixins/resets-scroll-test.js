import Ember from 'ember';
import ResetsScrollMixin from '../../../mixins/resets-scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | resets scroll');

// Replace this with your real tests.
test('it works', function(assert) {
  var ResetsScrollObject = Ember.Object.extend(ResetsScrollMixin);
  var subject = ResetsScrollObject.create();
  assert.ok(subject);
});
