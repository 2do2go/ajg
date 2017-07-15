'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `exclusiveMinimum`', () => {
	describe('if called', () => {
		it('should produce schema with `exclusiveMinimum`', () => {
			expect(ajg.schema.exclusiveMinimum(3)).to.be.eql({ exclusiveMinimum: 3 });
		});
	});
});
