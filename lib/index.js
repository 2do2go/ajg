'use strict';

const createSchema = require('./createSchema');

Object.defineProperty(exports, 'schema', { get: createSchema });

exports.createSchema = createSchema;
