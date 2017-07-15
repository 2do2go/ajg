'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `conform`', function () {
	describe('if called', function () {
		it('should produce schema with `conform` function', function () {
			var conform = function () {};
			expect(ajg.schema.conform(conform)).to.be.eql({ conform: conform });
		});
	});
});
