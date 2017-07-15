'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `minItems`', function () {
	describe('if called', function () {
		it('should produce schema with `minItems`', function () {
			expect(ajg.schema.minItems(3)).to.be.eql({ minItems: 3 });
		});
	});
});
