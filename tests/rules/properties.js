'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `properties`', () => {
	describe('if called', () => {
		it('should produce schema with `properties`', () => {
			expect(ajg.schema.properties({ a: 1 })).to.be.eql({ properties: { a: 1 } });
		});
	});
});
