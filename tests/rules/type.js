'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `type`', function () {
	describe('if called', function () {
		it('should produce schema with `type`', function () {
			expect(ajg.schema.type('any')).to.be.eql({ type: 'any' });
		});
	});
});
