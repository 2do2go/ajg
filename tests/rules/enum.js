'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `enum`', () => {
	describe('if called', () => {
		it('should produce schema with `enum`', () => {
			expect(ajg.schema.enum([1, 2])).to.be.eql({ enum: [1, 2] });
		});
	});
});
