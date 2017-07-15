'use strict';

exports.setKeyValue = schema =>
	(key, value) => Object.assign({}, schema, { [key]: value });

exports.setValue = (schema, key) =>
	value => Object.assign({}, schema, { [key]: value });

exports.setTrue = (schema, key) =>
	() => Object.assign({}, schema, { [key]: true });

exports.setType = (schema, type) =>
	() => Object.assign({}, schema, { type });

exports.extend = schema =>
	function extend() {
		const args = [{}, schema].concat(Array.from(arguments));

		return Object.assign.apply(null, args);
	};

exports.reset = schema =>
	function reset() {
		const keys = Array.from(arguments);

		if (keys.length > 0) {
			keys.forEach((key) => {
				delete schema[key];
			});

			return schema;
		}

		return {};
	};
