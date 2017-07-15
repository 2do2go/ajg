'use strict';

var utils = require('./utils');

exports.setKeyValue = function createSetKeyValueAction(schema) {
	return function setKeyValue(key, value) {
		return Object.assign({}, schema, utils.object(key, value));
	};
};

exports.setValue = function createSetValueAction(schema, key) {
	return function setValue(value) {
		return Object.assign({}, schema, utils.object(key, value));
	};
};

exports.setTrue = function createSetTrueAction(schema, key) {
	return function setTrue() {
		return Object.assign({}, schema, utils.object(key, true));
	};
};

exports.setType = function createSetTypeAction(schema, type) {
	return function setType() {
		return Object.assign({}, schema, { type: type });
	};
};

exports.extend = function createExtendAction(schema) {
	return function extend() {
		var args = [{}, schema].concat(utils.toArray(arguments));

		return Object.assign.apply(null, args);
	};
};

exports.reset = function createResetAction(schema) {
	return function reset() {
		var keys = utils.toArray(arguments);

		if (keys.length > 0) {
			keys.forEach(function keysIterator(key) {
				delete schema[key];
			});

			return schema;
		}

		return {};
	};
};
