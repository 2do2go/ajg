'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `pattern`', () => {
	describe('if called', () => {
		it('should produce schema with `pattern`', () => {
			expect(ajg.schema.pattern(/a/)).to.be.eql({ pattern: /a/ });
		});
	});
});
