'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `maximum`', () => {
	describe('if called', () => {
		it('should produce schema with `maximum`', () => {
			expect(ajg.schema.maximum(3)).to.be.eql({ maximum: 3 });
		});
	});
});
