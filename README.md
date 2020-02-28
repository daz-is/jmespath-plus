# JMESPath+

[![Build Status](https://travis-ci.org/daz-is/jmespath-plus.png?branch=master)](https://travis-ci.org/daz-is/jmespath-plus)

This is an extension of a [fork](https://github.com/daz-is/jmespath.js) of the original JMES Path.

It fully complies with the spec, and includes all tests
from the original `jmespath.js` project.

## Install

Install from npm:

    npm install --save jmespath-plus

## Usage

```js
const jmespath = require('jmespath-plus');
const v = jmespath.search({ a: 42 }, 'a');
console.log(v); // output = 42
```

## Additions

 - additional functions have been added (see below)
 - more custom functions can be added by you
 - the `$` character can be used within expressions to reference the root
 - parsed expressions can be cached and run against multiple data

## Extra functions

The following extra functions have been added:

### `toLowerCase(STRING)`

Converts string to lowercase.

### `trim(STRING)`

Removes any spaces from beginning and end of string.

### `split(STRING, separator:STRING)`

Split string by separator.

### `zip(...ARRAYS)`

### `toPairs(OBJECT)`

Convert an object into an array of key value pairs.

### `fromPairs(ARRAY)`

Convert an array of key value pairs back into an object.

### `omit(OBJECT, ...KEYS)`

Return the object but omitting the items with the specified keys.

### `pick(OBJECT, ...KEYS)`

Return a new object with only the items with the specified keys.

