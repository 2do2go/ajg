'use strict';

const expect = require('chai').expect;
const ajg = require('../../lib');

describe('Rule `messages`', () => {
	describe('if called', () => {
		it('should produce schema with `messages`', () => {
			expect(ajg.schema.messages({ type: 'a' })).to.be.eql({ messages: { type: 'a' } });
		});
	});
});
