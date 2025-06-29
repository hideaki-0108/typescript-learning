import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/b/b-5';

describe('B-5', () => {
  it('偶数と奇数が混在する場合', () => {
    const input = '5 1 2 3 4 5';
    const expected = '2 3';
    expect(solve(input)).toBe(expected);
  });

  it('全て偶数の場合', () => {
    const input = '4 2 4 6 8';
    const expected = '4 0';
    expect(solve(input)).toBe(expected);
  });

  it('全て奇数の場合', () => {
    const input = '3 1 3 5';
    const expected = '0 3';
    expect(solve(input)).toBe(expected);
  });

  it('1つだけの場合', () => {
    const input = '1 7';
    const expected = '0 1';
    expect(solve(input)).toBe(expected);
  });
});
