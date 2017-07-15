'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `enum`', function () {
	describe('if called', function () {
		it('should produce schema with `enum`', function () {
			expect(ajg.schema.enum([1, 2])).to.be.eql({ enum: [1, 2] });
		});
	});
});
