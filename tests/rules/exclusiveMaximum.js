'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `exclusiveMaximum`', function () {
	describe('if called', function () {
		it('should produce schema with `exclusiveMaximum`', function () {
			expect(ajg.schema.exclusiveMaximum(3)).to.be.eql({ exclusiveMaximum: 3 });
		});
	});
});
