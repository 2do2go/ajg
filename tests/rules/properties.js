'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `properties`', function () {
	describe('if called', function () {
		it('should produce schema with `properties`', function () {
			expect(ajg.schema.properties({ a: 1 })).to.be.eql({ properties: { a: 1 } });
		});
	});
});
