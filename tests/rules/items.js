'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `items`', function () {
	describe('if called', function () {
		it('should produce schema with `items`', function () {
			expect(ajg.schema.items(ajg.schema.any)).to.be.eql({ items: { type: 'any' } });
		});
	});
});
