'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `maxLength`', () => {
	describe('if called', () => {
		it('should produce schema with `maxLength`', () => {
			expect(ajg.schema.maxLength(3)).to.be.eql({ maxLength: 3 });
		});
	});
});
