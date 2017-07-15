'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `integer`', () => {
	describe('if present', () => {
		it('should produce schema with `type: integer`', () => {
			expect(ajg.schema.integer).to.be.eql({ type: 'integer' });
		});
	});
});
