import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/b/b-6';

describe('B-6', () => {
  it('通常ケース', () => {
    const input = '4 10 3 8 6';
    const expected = '7';
    expect(solve(input)).toBe(expected);
  });

  it('最大値と最小値が同じ場合', () => {
    const input = '3 5 5 5';
    const expected = '0';
    expect(solve(input)).toBe(expected);
  });

  it('1つだけの場合', () => {
    const input = '1 42';
    const expected = '0';
    expect(solve(input)).toBe(expected);
  });

  it('負の数を含む場合', () => {
    const input = '3 -5 0 5';
    const expected = '10';
    expect(solve(input)).toBe(expected);
  });
});
