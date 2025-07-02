import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-11.js';

describe('A-11', () => {
  it('should solve the problem correctly', () => {
    const input = `hello`;
    const expected = `olleh`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle single character', () => {
    const input = `a`;
    const expected = `a`;
    expect(solve(input)).toBe(expected);
  });

  it('should handle empty string', () => {
    const input = ``;
    const expected = ``;
    expect(solve(input)).toBe(expected);
  });
}); 