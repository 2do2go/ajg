'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `integer`', function () {
	describe('if present', function () {
		it('should produce schema with `type: integer`', function () {
			expect(ajg.schema.integer).to.be.eql({ type: 'integer' });
		});
	});
});
