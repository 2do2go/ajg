'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `exclusiveMinimum`', function () {
	describe('if called', function () {
		it('should produce schema with `exclusiveMinimum`', function () {
			expect(ajg.schema.exclusiveMinimum(3)).to.be.eql({ exclusiveMinimum: 3 });
		});
	});
});
