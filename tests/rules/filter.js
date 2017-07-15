'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `filter`', function () {
	describe('if called', function () {
		it('should produce schema with `filter`', function () {
			expect(ajg.schema.filter('parse')).to.be.eql({ filter: 'parse' });
		});
	});
});
