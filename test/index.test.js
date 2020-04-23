const assert = require('assert');

const toUpperCase = require('../src/index.js').toUpperCase; // eslint-disable-line prefer-destructuring

describe('Simple toUpperCase test', () => {
  it('should return OK', () => {
    assert.equal(toUpperCase('ok'), 'OK');
  });
});
