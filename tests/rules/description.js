'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `description`', () => {
	describe('if called', () => {
		it('should produce schema with `description`', () => {
			expect(ajg.schema.description('a')).to.be.eql({ description: 'a' });
		});
	});
});
