# JMESPath+

[![Build Status](https://travis-ci.org/daz-is/jmespath-plus.png?branch=master)](https://travis-ci.org/daz-is/jmespath-plus)

This is an extension of a [fork](https://github.com/daz-is/jmespath.js) of the original [JMESPath](http://jmespath.org/).

It fully complies with the spec, and includes all tests
from the original `jmespath.js` project.

## Motivation

There is an article on the XML website claiming that [You Should Be Using XSLT 3.0](https://www.xml.com/articles/2017/02/14/why-you-should-be-using-xslt-30/) to process JSON. If you take a look at the XSLT given for performing the transformation of the JSON in their example, it's (like XML in general) overly verbose. 

I couldn't quite reproduce the same thing using the original JMESPath, but with my fork of JMESPath that allows for the 
addition of custom functions, I could. By adding the `toPairs` function, there is now an elegant solution to the example
from that XML article:

```
toPairs(employees)[*]
  .merge(
    [1],
    {
      id: [0],
      fullName: join(' ', [[1].firstname, [1].surname]),
      reverseName: join(', ', [[1].surname, [1].firstname])
    }
  )
```

The original jmespath.js repository has not been updated for many years. 
There are many unanswered issues, including [this one](https://github.com/jmespath/jmespath.js/issues/60)
inquiring about the project status. Also on the website repo there is [an issue](https://github.com/jmespath/jmespath.site/issues/65) about the project status.
I submitted a [pull request](https://github.com/jmespath/jmespath.js/pull/61).

In the meantime, I published my fork as a "scoped package" on NPM [here](https://www.npmjs.com/package/@daz.is/jmespath).

This package is an extension of that fork, with some extra utility functions that I find useful. I added a few bits of lodash and some string functions. Open an issue if you need any extra functions added, or use the code in 
`src/main.js` as an example and extend `@daz.is/jmespath.js` with your own functions.

## Install

Install from npm:

    npm install --save jmespath-plus

## Online demo:

https://codesandbox.io/embed/focused-lichterman-y867l?fontsize=14&hidenavigation=1&theme=dark

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

