'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `array`', () => {
	describe('if present', () => {
		it('should produce schema with `type: array`', () => {
			expect(ajg.schema.array).to.be.eql({ type: 'array' });
		});
	});
});
