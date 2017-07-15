'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `message`', () => {
	describe('if called', () => {
		it('should produce schema with `message`', () => {
			expect(ajg.schema.message('a')).to.be.eql({ message: 'a' });
		});
	});
});
