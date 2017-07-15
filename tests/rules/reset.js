'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `reset`', function () {
	describe('if called with arg', function () {
		it('should unset key in schema', function () {
			expect(ajg.schema.required.array.reset('required')).to.be.eql({ type: 'array' });
		});
	});

	describe('if called without args', function () {
		it('should return empty schema', function () {
			expect(ajg.schema.required.array.reset()).to.be.eql({});
		});
	});
});
