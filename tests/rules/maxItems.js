'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `maxItems`', () => {
	describe('if called', () => {
		it('should produce schema with `maxItems`', () => {
			expect(ajg.schema.maxItems(3)).to.be.eql({ maxItems: 3 });
		});
	});
});
