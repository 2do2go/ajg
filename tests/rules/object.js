'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `object`', function () {
	describe('if present', function () {
		it('should produce schema with `type: object`', function () {
			expect(ajg.schema.object).to.be.eql({ type: 'object' });
		});
	});
});
