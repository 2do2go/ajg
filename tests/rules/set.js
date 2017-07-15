'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `set`', () => {
	describe('if called', () => {
		it('should set custom key/value in schema', () => {
			expect(ajg.schema.set('a', 'b')).to.be.eql({ a: 'b' });
		});
	});
});
