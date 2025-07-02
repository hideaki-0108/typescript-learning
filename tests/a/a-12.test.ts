import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-12.js';

describe('A-12', () => {
  it('should solve the problem correctly', () => {
    const input = `5
3 1 4 1 5`;
    const expected = `5 1`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle single number', () => {
    const input = `1
42`;
    const expected = `42 42`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle negative numbers', () => {
    const input = `3
-5 -2 -8`;
    const expected = `-2 -8`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle mixed positive and negative numbers', () => {
    const input = `4
-3 7 -1 4`;
    const expected = `7 -3`;
    expect(solve(input)).toBe(expected);
  });
}); 