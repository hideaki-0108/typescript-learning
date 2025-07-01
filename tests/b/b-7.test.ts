import { describe, it, expect } from '@jest/globals';
import { solve } from '../../src/problems/b/b-7.js';

describe('B-7', () => {
  it('should count pairs correctly', () => {
    const input = `3 2 5
1 3 4
2 3`;
    const expected = '1';
    expect(solve(input)).toBe(expected);
  });

  it('should handle no pairs found', () => {
    const input = `2 2 10
1 2
3 4`;
    const expected = '0';
    expect(solve(input)).toBe(expected);
  });

  it('should handle single element arrays', () => {
    const input = `1 1 5
2
3`;
    const expected = '1';
    expect(solve(input)).toBe(expected);
  });

  it('should handle multiple pairs with same sum', () => {
    const input = `3 3 4
1 2 3
1 2 3`;
    const expected = '3';
    expect(solve(input)).toBe(expected);
  });
});