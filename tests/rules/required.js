'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `required`', function () {
	describe('if present', function () {
		it('should produce schema with `required: true`', function () {
			expect(ajg.schema.required).to.be.eql({ required: true });
		});
	});
});
