import { describe, it, expect } from '@jest/globals';
import { solve } from '../../src/problems/a/a-3.js';

describe('A-3', () => {
  it('should calculate the range (max - min) correctly', () => {
    const input = `5 3 1 4 1 5 9 2 6 5 3`;
    const expected = `8`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle array with same values', () => {
    const input = `3 5 5 5`;
    const expected = `0`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle array with two different values', () => {
    const input = `2 1 10`;
    const expected = `9`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle single element array', () => {
    const input = `1 42`;
    const expected = `0`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle negative numbers', () => {
    const input = `4 -5 10 -2 7`;
    const expected = `15`;
    expect(solve(input)).toBe(expected);
  });
});
