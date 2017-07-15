'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `null`', () => {
	describe('if present', () => {
		it('should produce schema with `type: null`', () => {
			expect(ajg.schema.null).to.be.eql({ type: 'null' });
		});
	});
});
