import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-13.js';

describe('A-13', () => {
  it('should solve the problem correctly for even number', () => {
    const input = `4`;
    const expected = `Even`;
    expect(solve(input)).toBe(expected);
  });

  it('should solve the problem correctly for odd number', () => {
    const input = `7`;
    const expected = `Odd`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle zero', () => {
    const input = `0`;
    const expected = `Even`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle negative even number', () => {
    const input = `-6`;
    const expected = `Even`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle negative odd number', () => {
    const input = `-5`;
    const expected = `Odd`;
    expect(solve(input)).toBe(expected);
  });
}); 