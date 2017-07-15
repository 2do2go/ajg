'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `format`', () => {
	describe('if called', () => {
		it('should produce schema with `format`', () => {
			expect(ajg.schema.format('url')).to.be.eql({ format: 'url' });
		});
	});
});
