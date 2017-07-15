'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `divisibleBy`', function () {
	describe('if called', function () {
		it('should produce schema with `divisibleBy`', function () {
			expect(ajg.schema.divisibleBy(2)).to.be.eql({ divisibleBy: 2 });
		});
	});
});
