import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-9';

describe('A-9 偶数の個数', () => {
  it('例1: 偶数2つ', () => {
    const input = `4\n1 2 3 4`;
    expect(solve(input)).toBe('2');
  });
  it('例2: 偶数なし', () => {
    const input = `3\n1 3 5`;
    expect(solve(input)).toBe('0');
  });
  it('例3: 全て偶数', () => {
    const input = `5\n2 4 6 8 10`;
    expect(solve(input)).toBe('5');
  });
  it('例4: 0も偶数', () => {
    const input = `1\n0`;
    expect(solve(input)).toBe('1');
  });
  it('例5: 負の偶数含む', () => {
    const input = `6\n-2 -4 1 3 5 7`;
    expect(solve(input)).toBe('2');
  });
});
