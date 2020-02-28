var assert = require('assert');
var jmespath = require('../jmespath');
var search = jmespath.search;

describe('custom functions', function() {
  it(
    'lodash zip',
    function() {
      const data = { foo: 'bar', value: 42 };
      const expr = "zip(keys(@), values(@))";
      const value = search(data, expr);
      assert.deepStrictEqual(value, [['foo', 'bar'], ['value', 42]]);
    }
  );
  it(
    'lodash toPairs',
    function() {
      const data = { foo: 'bar', value: 42 };
      const expr = "toPairs(@)";
      const value = search(data, expr);
      assert.deepStrictEqual(value, [['foo', 'bar'], ['value', 42]]);
    }
  );
  it(
    'lodash fromPairs',
    function() {
      const data = [['foo', 'bar'], ['value', 42]];
      const expr = "fromPairs(@)";
      const value = search(data, expr);
      assert.deepStrictEqual(value, { foo: 'bar', value: 42 });
    }
  );
  it(
    'lodash omit',
    function() {
      const data = { foo: 'bar', value: 42 };
      const expr = "omit(@, 'foo')";
      const value = search(data, expr);
      assert.deepStrictEqual(value, { value: 42 });
    }
  );
  it(
    'lodash pick',
    function() {
      const data = { foo: 'bar', value: 42 };
      const expr = "pick(@, 'foo')";
      const value = search(data, expr);
      assert.deepStrictEqual(value, { foo: 'bar' });
    }
  );
});
