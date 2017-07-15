'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `extend`', function () {
	describe('if called', function () {
		it('should extend schema by custom object', function () {
			expect(ajg.schema.required.extend({ a: 'b' })).to.be.eql({
				required: true,
				a: 'b'
			});
		});
	});
});
