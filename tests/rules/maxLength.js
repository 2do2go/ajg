'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `maxLength`', function () {
	describe('if called', function () {
		it('should produce schema with `maxLength`', function () {
			expect(ajg.schema.maxLength(3)).to.be.eql({ maxLength: 3 });
		});
	});
});
