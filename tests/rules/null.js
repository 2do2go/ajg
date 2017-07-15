'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `null`', function () {
	describe('if present', function () {
		it('should produce schema with `type: null`', function () {
			expect(ajg.schema.null).to.be.eql({ type: 'null' });
		});
	});
});
