'use strict';

const rules = require('./rules');

const hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function createSchema(baseSchema) {
	const schema = Object.assign({}, baseSchema);

	rules.forEach(rule =>
		rule.keys.forEach((key) => {
			if (!hasOwnProperty.call(schema, key)) {
				const action = rule.createAction(schema, key);

				Object.defineProperty(schema, key, {
					[rule.type]: function ruleMethod() {
						return createSchema(action.apply(null, arguments));
					}
				});
			}
		})
	);

	return schema;
};
