'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `dependencies`', function () {
	describe('if called', function () {
		it('should produce schema with `dependencies`', function () {
			expect(ajg.schema.dependencies({ a: 1 })).to.be.eql({ dependencies: { a: 1 } });
		});
	});
});
