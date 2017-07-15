'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `description`', function () {
	describe('if called', function () {
		it('should produce schema with `description`', function () {
			expect(ajg.schema.description('a')).to.be.eql({ description: 'a' });
		});
	});
});
