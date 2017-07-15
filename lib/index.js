'use strict';

var createSchema = require('./createSchema');

Object.defineProperty(exports, 'schema', {
	get: createSchema
});

exports.createSchema = createSchema;
