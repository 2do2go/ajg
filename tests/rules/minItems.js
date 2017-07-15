'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `minItems`', () => {
	describe('if called', () => {
		it('should produce schema with `minItems`', () => {
			expect(ajg.schema.minItems(3)).to.be.eql({ minItems: 3 });
		});
	});
});
