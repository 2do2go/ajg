'use strict';

var actions = require('./actions');

var types = {
	get: 'get',
	value: 'value'
};

module.exports = [{
	type: types.value,
	createAction: actions.setKeyValue,
	keys: ['set']
}, {
	type: types.value,
	createAction: actions.extend,
	keys: ['extend']
}, {
	type: types.value,
	createAction: actions.reset,
	keys: ['reset']
}, {
	type: types.value,
	createAction: actions.setValue,
	keys: [
		'message', 'messages', 'description',
		'type',
		'pattern',
		'format', 'filter',
		'minimum', 'maximum',
		'exclusiveMinimum', 'exclusiveMaximum',
		'divisibleBy',
		'enum',
		'properties',
		'items',
		'minLength', 'maxLength',
		'minItems', 'maxItems',
		'default',
		'conform',
		'dependencies'
	]
}, {
	type: types.get,
	createAction: actions.setTrue,
	keys: ['required']
}, {
	type: types.get,
	createAction: actions.setType,
	keys: [
		'string',
		'number',
		'integer',
		'array',
		'boolean',
		'object',
		'null',
		'date',
		'any'
	]
}];
