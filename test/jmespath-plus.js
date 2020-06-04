const jmespath = require('../jmespath');
var assert = require('assert');

describe('types are exposed', () => {
  it('exposes the types property for adding additional functions', () => {
    assert(jmespath.types);
    assert(Object.keys(jmespath.types).length > 0);
  });
})
