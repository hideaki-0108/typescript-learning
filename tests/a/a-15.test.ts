import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-15.js';

describe('A-15', () => {
  it('should solve the problem correctly', () => {
    const input = `4
1 2 3 4`;
    const expected = `2`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle single number', () => {
    const input = `1
42`;
    const expected = `42`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle exact division', () => {
    const input = `3
6 9 12`;
    const expected = `9`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle negative numbers', () => {
    const input = `3
-5 -3 -1`;
    const expected = `-3`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle mixed positive and negative numbers', () => {
    const input = `5
-10 -5 0 5 10`;
    const expected = `0`;
    expect(solve(input)).toBe(expected);
  });

  it('should floor the result', () => {
    const input = `3
1 2 3`;
    const expected = `2`;
    expect(solve(input)).toBe(expected);
  });
}); 