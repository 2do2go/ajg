'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `object`', () => {
	describe('if present', () => {
		it('should produce schema with `type: object`', () => {
			expect(ajg.schema.object).to.be.eql({ type: 'object' });
		});
	});
});
