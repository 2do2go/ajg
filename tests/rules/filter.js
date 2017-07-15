'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `filter`', () => {
	describe('if called', () => {
		it('should produce schema with `filter`', () => {
			expect(ajg.schema.filter('parse')).to.be.eql({ filter: 'parse' });
		});
	});
});
