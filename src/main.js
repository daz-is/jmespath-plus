import jmespath from '@daz.is/jmespath';
import zip from 'lodash.zip';
import omit from 'lodash.omit';
import pick from 'lodash.pick';
import fromPairs from 'lodash.frompairs';
import toPairs from 'lodash.topairs';

const functions = {
  // STRING FUNCTIONS
  toLowerCase: {
    _func: ([s]) => s.toLowerCase(),
    _signature: [{types: [jmespath.types.TYPE_STRING]}]
  },
  replace: {
    _func: ([s, v, nv]) => s.replace(v, nv),
    _signature: [
    {types: [jmespath.types.TYPE_STRING]},
    {types: [jmespath.types.TYPE_STRING]},
    {types: [jmespath.types.TYPE_STRING]}
  ]
  },
  trim: {
    _func: ([s]) => s.trim(),
    _signature: [{types: [jmespath.types.TYPE_STRING]}]
  },
  split: {
    _func: ([v, s]) => v.split(s),
    _signature: [
      {types: [jmespath.types.TYPE_STRING]},
      {types: [jmespath.types.TYPE_STRING]}
    ]
  },
  // LODASH FUNCTIONS
  zip: {
    _func: args => zip(...args),
    _signature: [
      {types: [jmespath.types.TYPE_ARRAY], variadic: true},
    ]
  },
  fromPairs: {
    _func: args => fromPairs(...args),
    _signature: [
      {types: [jmespath.types.TYPE_ARRAY]},
    ]
  },
  toPairs: {
    _func: args => toPairs(...args),
    _signature: [
      {types: [jmespath.types.TYPE_OBJECT]},
    ]
  },
  omit: {
    _func: args => omit(...args),
    _signature: [
      {types: [jmespath.types.TYPE_OBJECT]},
      {types: [jmespath.types.TYPE_STRING], variadic: true}
    ]
  },
  pick: {
    _func: args => pick(...args),
    _signature: [
      {types: [jmespath.types.TYPE_OBJECT]},
      {types: [jmespath.types.TYPE_STRING], variadic: true}
    ]
  },
};

export default {
  strictDeepEqual: jmespath.strictDeepEqual,
  tokenize: jmespath.tokenize,
  compile: jmespath.compile,
  decorate: function (fns) {
    return jmespath.decorate({...functions, ...fns});
  },
  search: function (data, expression) {
    return jmespath.decorate(functions)(expression)(data);
  },
  types: jmespath.types,
};
