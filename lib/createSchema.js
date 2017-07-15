'use strict';

var utils = require('./utils');
var rules = require('./rules');

module.exports = function createSchema(baseSchema) {
	var schema = Object.assign({}, baseSchema);

	rules.forEach(function rulesIterator(rule) {
		rule.keys.forEach(function keysIterator(key) {
			if (!utils.has(schema, key)) {
				var action = rule.createAction(schema, key);

				var descriptor = utils.object(rule.type, function ruleMethod() {
					return createSchema(action.apply(null, arguments));
				});

				Object.defineProperty(schema, key, descriptor);
			}
		});
	});

	return schema;
};
