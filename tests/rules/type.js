'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `type`', () => {
	describe('if called', () => {
		it('should produce schema with `type`', () => {
			expect(ajg.schema.type('any')).to.be.eql({ type: 'any' });
		});
	});
});
