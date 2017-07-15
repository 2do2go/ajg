'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `items`', () => {
	describe('if called', () => {
		it('should produce schema with `items`', () => {
			expect(ajg.schema.items(ajg.schema.any)).to.be.eql({ items: { type: 'any' } });
		});
	});
});
