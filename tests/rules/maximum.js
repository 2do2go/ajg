'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `maximum`', function () {
	describe('if called', function () {
		it('should produce schema with `maximum`', function () {
			expect(ajg.schema.maximum(3)).to.be.eql({ maximum: 3 });
		});
	});
});
