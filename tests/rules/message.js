'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `message`', function () {
	describe('if called', function () {
		it('should produce schema with `message`', function () {
			expect(ajg.schema.message('a')).to.be.eql({ message: 'a' });
		});
	});
});
