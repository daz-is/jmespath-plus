var assert = require('assert');
var jmespath = require('../jmespath');
var search = jmespath.search;

describe('custom functions', function() {
  it(
    'string replace',
    function() {
      const data = { foo: "test"};
      const expr = "replace(foo, 'test', 'a')";
      const value = search(data, expr);
      assert.equal(value, "a");
    }
  );
  it(
    'string toLowerCase',
    function() {
      const data = { foo: "aMixedCaseThing"};
      const expr = 'toLowerCase(foo)';
      const value = search(data, expr);
      assert.equal(value, "amixedcasething");
    }
  );
  it(
    'string trim',
    function() {
      const data = { foo: " a padded thing   "};
      const expr = 'trim(foo)';
      const value = search(data, expr);
      assert.equal(value, "a padded thing");
    }
  );
  it(
    'string split',
    function() {
      const data = { foo: "id:artist:42"};
      const expr = "split(foo, ':')";
      const value = search(data, expr);
      assert.deepStrictEqual(value, ['id', 'artist', '42']);
    }
  );
});
