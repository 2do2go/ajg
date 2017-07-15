'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `boolean`', () => {
	describe('if present', () => {
		it('should produce schema with `type: boolean`', () => {
			expect(ajg.schema.boolean).to.be.eql({ type: 'boolean' });
		});
	});
});
