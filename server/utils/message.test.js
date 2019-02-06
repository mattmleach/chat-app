const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Matt';
        const text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeGreaterThan(0);
        expect(message).toHaveProperty('from', from);
        expect(message).toHaveProperty('text', text);
    });
});