'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `string`', () => {
	describe('if present', () => {
		it('should produce schema with `type: string`', () => {
			expect(ajg.schema.string).to.be.eql({ type: 'string' });
		});
	});
});
