'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `any`', function () {
	describe('if present', function () {
		it('should produce schema with `type: any`', function () {
			expect(ajg.schema.any).to.be.eql({ type: 'any' });
		});
	});
});
