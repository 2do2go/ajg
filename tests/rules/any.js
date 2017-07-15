'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `any`', () => {
	describe('if present', () => {
		it('should produce schema with `type: any`', () => {
			expect(ajg.schema.any).to.be.eql({ type: 'any' });
		});
	});
});
