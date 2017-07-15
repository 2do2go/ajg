'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `number`', () => {
	describe('if present', () => {
		it('should produce schema with `type: number`', () => {
			expect(ajg.schema.number).to.be.eql({ type: 'number' });
		});
	});
});
