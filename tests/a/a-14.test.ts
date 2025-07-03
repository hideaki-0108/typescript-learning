import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-14.js';

describe('A-14', () => {
  it('should solve the problem correctly', () => {
    const input = `Hello world from TypeScript`;
    const expected = `4`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle single word', () => {
    const input = `Hello`;
    const expected = `1`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle empty string', () => {
    const input = ``;
    const expected = `0`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle multiple spaces between words', () => {
    const input = `a  b   c`;
    const expected = `3`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle numbers and letters', () => {
    const input = `test 123 abc 456`;
    const expected = `4`;
    expect(solve(input)).toBe(expected);
  });
}); 