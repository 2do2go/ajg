'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `required`', () => {
	describe('if present', () => {
		it('should produce schema with `required: true`', () => {
			expect(ajg.schema.required).to.be.eql({ required: true });
		});
	});
});
