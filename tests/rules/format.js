'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `format`', function () {
	describe('if called', function () {
		it('should produce schema with `format`', function () {
			expect(ajg.schema.format('url')).to.be.eql({ format: 'url' });
		});
	});
});
