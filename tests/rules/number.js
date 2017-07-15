'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `number`', function () {
	describe('if present', function () {
		it('should produce schema with `type: number`', function () {
			expect(ajg.schema.number).to.be.eql({ type: 'number' });
		});
	});
});
