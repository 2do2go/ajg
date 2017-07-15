# Ajg: Another JSON Schema Generator

Write your JSON-schemas in simple chainable manner. No plain JSON - no pain.


## Quick Start

Install it with NPM or add it to your package.json:

``` bash
$ npm install ajg
```


## API

### ajg.schema

Getter property that creates empty JSON-schema.
This schema could be modified by rules in chainable manner:

``` js
ajg.schema.required.array.items(ajg.schema.integer)
```

Produces:

``` js
{
    required: true,
    type: 'array',
    items: {
        type: 'integer'
    }
}
```


### Rules

Currently Ajg supports only draft-03 rules and fully compatible with [conform.js](https://github.com/okv/conform.js/).

### required

`ajg.schema.required` -> `{ required: true }`

### any

`ajg.schema.any` -> `{ type: 'any' }`

### array

`ajg.schema.array` -> `{ type: 'array' }`

### object

`ajg.schema.object` -> `{ type: 'object' }`

### boolean

`ajg.schema.boolean` -> `{ type: 'boolean' }`

### number

`ajg.schema.number` -> `{ type: 'number' }`

### integer

`ajg.schema.integer` -> `{ type: 'integer' }`

### string

`ajg.schema.string` -> `{ type: 'string' }`

### null

`ajg.schema.null` -> `{ type: 'null' }`

### type(type)

`ajg.schema.type('array')` -> `{ type: 'array' }`

### message(message)

`ajg.schema.message('hello')` -> `{ message: 'hello' }`

### messages(messages)

`ajg.schema.messages({ required: 'hello' })` -> `{ messages: { required: 'hello' } }`

### description(description)

`ajg.schema.description('hello')` -> `{ description: 'hello' }`

### set(key, value)

`ajg.schema.set('a', 'b')` -> `{ a: 'b' }`

### extend(obj1, obj2, ...)

`ajg.schema.extend({a: 'b'})` -> `{ a: 'b' }`

### reset(key1, key2, ...)

`ajg.schema.required.reset('required')` -> `{}`

### reset()

`ajg.schema.required.reset()` -> `{}`

...


## Tests

Clone repository from github, `cd` into cloned dir and install dev dependencies:

``` bash
$ npm install
```

Then run tests with command:

``` bash
$ npm test
```


## License

[MIT](./LICENSE)
