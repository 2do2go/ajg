'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `dependencies`', () => {
	describe('if called', () => {
		it('should produce schema with `dependencies`', () => {
			expect(ajg.schema.dependencies({ a: 1 })).to.be.eql({ dependencies: { a: 1 } });
		});
	});
});
