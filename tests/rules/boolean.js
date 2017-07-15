'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `boolean`', function () {
	describe('if present', function () {
		it('should produce schema with `type: boolean`', function () {
			expect(ajg.schema.boolean).to.be.eql({ type: 'boolean' });
		});
	});
});
