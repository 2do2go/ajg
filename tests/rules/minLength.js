'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `minLength`', () => {
	describe('if called', () => {
		it('should produce schema with `minLength`', () => {
			expect(ajg.schema.minLength(3)).to.be.eql({ minLength: 3 });
		});
	});
});
