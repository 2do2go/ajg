'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `reset`', () => {
	describe('if called with arg', () => {
		it('should unset key in schema', () => {
			expect(ajg.schema.required.array.reset('required')).to.be.eql({ type: 'array' });
		});
	});

	describe('if called without args', () => {
		it('should return empty schema', () => {
			expect(ajg.schema.required.array.reset()).to.be.eql({});
		});
	});
});
