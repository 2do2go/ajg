'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `date`', function () {
	describe('if present', function () {
		it('should produce schema with `type: date`', function () {
			expect(ajg.schema.date).to.be.eql({ type: 'date' });
		});
	});
});
