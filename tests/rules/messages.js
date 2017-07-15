'use strict';

var expect = require('chai').expect;
var ajg = require('../../lib');

describe('Rule `messages`', function () {
	describe('if called', function () {
		it('should produce schema with `messages`', function () {
			expect(ajg.schema.messages({ type: 'a' })).to.be.eql({ messages: { type: 'a' } });
		});
	});
});
