import test from 'node:test';
import assert from 'node:assert/strict';
import { mean } from '../stats.js';

test('empty mean is null', () => assert.equal(mean([]), null));
test('mean of 2, 4, 6 is 4', () => assert.equal(mean([2, 4, 6]), 4));
test('mean of one value equals that value', () => assert.equal(mean([7]), 7));
test('mean of negative values is negative', () => assert.equal(mean([-2, -4]), -3));
test('mean of fractional values is fractional', () => assert.equal(mean([0.5, 1.5]), 1));
