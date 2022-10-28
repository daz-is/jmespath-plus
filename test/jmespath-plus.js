const jmespath = require('../jmespath');
var assert = require('assert');

describe('types are exposed', () => {
  it('exposes the types property for adding additional functions', () => {
    assert(jmespath.types);
    assert(Object.keys(jmespath.types).length > 0);
  });
})

describe('custom functions', () => {
  it('are supported', () => {
    const functions = {
      times: {
        _func: ([multiplicand, multiplier]) => multiplicand * multiplier,
        _signature: [{types: [jmespath.types.TYPE_NUMBER]}, {types: [jmespath.types.TYPE_NUMBER]}]
      }
    };
    jmespath.decorate(functions);
    const data = {two: 2, four: 4};
    const search = 'times(two, four)';
    assert(jmespath.search(data, search));
  });
})
