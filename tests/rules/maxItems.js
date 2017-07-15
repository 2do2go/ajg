'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `maxItems`', function () {
	describe('if called', function () {
		it('should produce schema with `maxItems`', function () {
			expect(ajg.schema.maxItems(3)).to.be.eql({ maxItems: 3 });
		});
	});
});
