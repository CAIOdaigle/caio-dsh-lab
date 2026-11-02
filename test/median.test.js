import test from 'node:test';
import assert from 'node:assert/strict';
import { median } from '../stats.js';

test('empty median is null', () => assert.equal(median([]), null));
test('median sorts numbers numerically', () => assert.equal(median([2, 10, 3]), 3));
test('even median averages the middle pair', () => assert.equal(median([1, 2, 3, 4]), 2.5));
test('median leaves the input unchanged', () => {
  const values = [3, 1, 2];
  median(values);
  assert.deepEqual(values, [3, 1, 2]);
});
