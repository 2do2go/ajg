'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `schema`', () => {
	describe('if called', () => {
		it('should produce empty schema', () => {
			expect(ajg.schema).to.be.eql({});
		});
	});

	describe('if called multiple twice', () => {
		it('should produce cloned objects', () => {
			const first = ajg.schema;
			const second = ajg.schema;
			expect(first).to.not.be.equal(second);
		});
	});
});
