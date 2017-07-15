'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `extend`', () => {
	describe('if called', () => {
		it('should extend schema by custom object', () => {
			expect(ajg.schema.required.extend({ a: 'b' })).to.be.eql({
				required: true,
				a: 'b'
			});
		});
	});
});
