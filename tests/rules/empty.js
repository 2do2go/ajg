'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `schema`', function () {
	describe('if called', function () {
		it('should produce empty schema', function () {
			expect(ajg.schema).to.be.eql({});
		});
	});

	describe('if called multiple twice', function () {
		it('should produce cloned objects', function () {
			var first = ajg.schema;
			var second = ajg.schema;
			expect(first).to.not.be.equal(second);
		});
	});
});
