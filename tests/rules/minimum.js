'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `minimum`', () => {
	describe('if called', () => {
		it('should produce schema with `minimum`', () => {
			expect(ajg.schema.minimum(3)).to.be.eql({ minimum: 3 });
		});
	});
});
