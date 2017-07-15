'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `minimum`', function () {
	describe('if called', function () {
		it('should produce schema with `minimum`', function () {
			expect(ajg.schema.minimum(3)).to.be.eql({ minimum: 3 });
		});
	});
});
