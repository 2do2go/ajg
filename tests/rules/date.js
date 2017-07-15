'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `date`', () => {
	describe('if present', () => {
		it('should produce schema with `type: date`', () => {
			expect(ajg.schema.date).to.be.eql({ type: 'date' });
		});
	});
});
