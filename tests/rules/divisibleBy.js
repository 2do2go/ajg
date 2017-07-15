'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `divisibleBy`', () => {
	describe('if called', () => {
		it('should produce schema with `divisibleBy`', () => {
			expect(ajg.schema.divisibleBy(2)).to.be.eql({ divisibleBy: 2 });
		});
	});
});
