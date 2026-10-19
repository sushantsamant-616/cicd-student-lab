const { test } = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('./app');

test('adds two positive numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('adds a positive and a negative number', () => {
  assert.equal(add(5, -2), 3);
});
