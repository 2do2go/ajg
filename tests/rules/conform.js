'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `conform`', () => {
	describe('if called', () => {
		it('should produce schema with `conform` function', () => {
			const conform = () => {};
			expect(ajg.schema.conform(conform)).to.be.eql({ conform });
		});
	});
});
