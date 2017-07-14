'use strict';

var utils = require('./utils');

var setModifierCreator = function(schema) {
	return function(key, value) {
		return Object.assign({}, schema, utils.object(key, value));
	};
};

var identityModifierCreator = function(schema, key) {
	return function(value) {
		return Object.assign({}, schema, utils.object(key, value));
	};
};

var trueModifierCreator = function(schema, key) {
	return function() {
		return Object.assign({}, schema, utils.object(key, true));
	};
};

var typeModifierCreator = function(schema, type) {
	return function() {
		return Object.assign({}, schema, {type: type});
	};
};

var extendModifierCreator = function(schema) {
	return function() {
		return Object.assign.apply({}, schema, arguments);
	};
};

var resetModifierCreator = function(schema) {
	return function() {
		var keys = utils.toArray(arguments);

		if (keys.length) {
			keys.forEach(function(key) {
				delete schema[key];
			});

			return schema;
		} else {
			return {};
		}
	};
};

var valueModifierCreators = {
	set: setModifierCreator,
	extend: extendModifierCreator,
	reset: resetModifierCreator,
	message: identityModifierCreator,
	messages: identityModifierCreator,
	description: identityModifierCreator,
	type: identityModifierCreator,
	pattern: identityModifierCreator,
	format: identityModifierCreator,
	filter: identityModifierCreator,
	minimum: identityModifierCreator,
	maximum: identityModifierCreator,
	exclusiveMinimum: identityModifierCreator,
	exclusiveMaximum: identityModifierCreator,
	divisibleBy: identityModifierCreator,
	enum: identityModifierCreator,
	properties: identityModifierCreator,
	items: identityModifierCreator,
	minLength: identityModifierCreator,
	maxLength: identityModifierCreator,
	minItems: identityModifierCreator,
	maxItems: identityModifierCreator,
	default: identityModifierCreator,
	conform: identityModifierCreator,
	dependencies: identityModifierCreator
};

var getModifierCreators = {
	required: trueModifierCreator,
	string: typeModifierCreator,
	number: typeModifierCreator,
	integer: typeModifierCreator,
	array: typeModifierCreator,
	boolean: typeModifierCreator,
	object: typeModifierCreator,
	null: typeModifierCreator,
	date: typeModifierCreator,
	any: typeModifierCreator
};

var defineModifier = function(schema, key, type, modifierCreator) {
	var descriptor = utils.object(type, function() {
		var args = utils.toArray(arguments);
		var modifier = modifierCreator(schema, key);

		return createRule(modifier.apply(null, args));
	});

	Object.defineProperty(schema, key, descriptor);
};

var createRule = module.exports = function(baseSchema) {
	var schema = Object.assign({}, baseSchema);

	Object.keys(valueModifierCreators).forEach(function(key) {
		if (!utils.has(schema, key)) {
			var modifierCreator = valueModifierCreators[key];

			defineModifier(schema, key, 'value', modifierCreator);
		}
	});

	Object.keys(getModifierCreators).forEach(function(key) {
		if (!utils.has(schema, key)) {
			var modifierCreator = getModifierCreators[key];

			defineModifier(schema, key, 'get', modifierCreator);
		}
	});

	return schema;
};
