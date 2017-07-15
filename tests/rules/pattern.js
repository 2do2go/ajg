'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `pattern`', function () {
	describe('if called', function () {
		it('should produce schema with `pattern`', function () {
			expect(ajg.schema.pattern(/a/)).to.be.eql({ pattern: /a/ });
		});
	});
});
