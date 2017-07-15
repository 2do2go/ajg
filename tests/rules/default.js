'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `default`', function () {
	describe('if called', function () {
		it('should produce schema with `default`', function () {
			expect(ajg.schema.default(1)).to.be.eql({ default: 1 });
		});
	});
});
