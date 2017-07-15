'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `default`', () => {
	describe('if called', () => {
		it('should produce schema with `default`', () => {
			expect(ajg.schema.default(1)).to.be.eql({ default: 1 });
		});
	});
});
