import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/b/b-3';

describe('B-3', () => {
  it('should count digits correctly', () => {
    const input = '6 5 123 7 45 8901 12';
    const expected = '2 2 1 1';
    expect(solve(input)).toBe(expected);
  });

  it('should handle all 1-digit numbers', () => {
    const input = '5 1 2 3 4 5';
    const expected = '5 0 0 0';
    expect(solve(input)).toBe(expected);
  });

  it('should handle mixed digits', () => {
    const input = '4 99 100 1000 10000';
    const expected = '0 1 1 2';
    expect(solve(input)).toBe(expected);
  });

  it('should handle single number', () => {
    const input = '1 42';
    const expected = '0 1 0 0';
    expect(solve(input)).toBe(expected);
  });

  it('should handle large numbers', () => {
    const input = '3 1 1000 10000';
    const expected = '1 0 0 2';
    expect(solve(input)).toBe(expected);
  });
});
