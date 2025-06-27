import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-8';

describe('A-8 最大値の出力', () => {
  it('例1: 複数の正の数', () => {
    const input = `5\n3 7 1 4 2`;
    expect(solve(input)).toBe('7');
  });
  it('例2: 最小値1つ', () => {
    const input = `1\n-1000`;
    expect(solve(input)).toBe('-1000');
  });
  it('例3: 全て負の数', () => {
    const input = `3\n-1 -2 -3`;
    expect(solve(input)).toBe('-1');
  });
  it('例4: 全て0', () => {
    const input = `4\n0 0 0 0`;
    expect(solve(input)).toBe('0');
  });
  it('例5: 昇順', () => {
    const input = `6\n1 2 3 4 5 6`;
    expect(solve(input)).toBe('6');
  });
});
