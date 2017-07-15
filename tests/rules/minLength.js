'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `minLength`', function () {
	describe('if called', function () {
		it('should produce schema with `minLength`', function () {
			expect(ajg.schema.minLength(3)).to.be.eql({ minLength: 3 });
		});
	});
});
