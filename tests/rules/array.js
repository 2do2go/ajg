'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `array`', function () {
	describe('if present', function () {
		it('should produce schema with `type: array`', function () {
			expect(ajg.schema.array).to.be.eql({ type: 'array' });
		});
	});
});
