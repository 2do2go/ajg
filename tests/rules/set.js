'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `set`', function () {
	describe('if called', function () {
		it('should set custom key/value in schema', function () {
			expect(ajg.schema.set('a', 'b')).to.be.eql({ a: 'b' });
		});
	});
});
