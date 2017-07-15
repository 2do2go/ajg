'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `exclusiveMaximum`', () => {
	describe('if called', () => {
		it('should produce schema with `exclusiveMaximum`', () => {
			expect(ajg.schema.exclusiveMaximum(3)).to.be.eql({ exclusiveMaximum: 3 });
		});
	});
});
