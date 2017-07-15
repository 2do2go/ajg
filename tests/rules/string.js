'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `string`', function () {
	describe('if present', function () {
		it('should produce schema with `type: string`', function () {
			expect(ajg.schema.string).to.be.eql({ type: 'string' });
		});
	});
});
