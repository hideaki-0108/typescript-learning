import { describe, it, expect } from '@jest/globals';
import { solve } from '../../src/problems/a/a-2.js';

describe('A-2', () => {
  it('should solve the problem correctly', () => {
    const input = `3 1 4 1 5 9 2 6 5 3`;
    const expected = `1 2 3 4 5 6 9`;
    expect(solve(input)).toBe(expected);
  });

  it('should solve the problem correctly', () => {
    const input = `10 1 2 3 4 5 6 7 8 9 10`;
    const expected = `1 2 3 4 5 6 7 8 9 10`;
    expect(solve(input)).toBe(expected);
  });

  it('should solve the problem correctly', () => {
    const input = `10 10 9 8 7 6 5 4 3 2 1`;
    const expected = `1 2 3 4 5 6 7 8 9 10`;
    expect(solve(input)).toBe(expected);
  });
});
