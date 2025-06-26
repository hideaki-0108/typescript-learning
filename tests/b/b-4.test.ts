import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/b/b-4';

describe('B-4', () => {
  it('should find closest and farthest points', () => {
    const input = `4
1 1
3 4
0 5
2 0`;
    const expected = '1 2';
    expect(solve(input)).toBe(expected);
  });

  it('should handle single point', () => {
    const input = `1
3 4`;
    const expected = '1 1';
    expect(solve(input)).toBe(expected);
  });

  it('should handle points on axes', () => {
    const input = `3
1 0
0 1
0 0`;
    const expected = '3 1';
    expect(solve(input)).toBe(expected);
  });

  it('should handle negative coordinates', () => {
    const input = `3
-3 -4
1 1
-1 0`;
    const expected = '3 1';
    expect(solve(input)).toBe(expected);
  });

  it('should prefer smaller index when distances are equal', () => {
    const input = `3
1 0
0 1
-1 0`;
    const expected = '1 1';
    expect(solve(input)).toBe(expected);
  });
});
