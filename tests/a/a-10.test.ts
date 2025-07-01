import { describe, it, expect } from '@jest/globals';
import { solve } from '../../src/problems/a/a-10.js';

describe('A-10', () => {
  it('should count specific character correctly', () => {
    const input = `hello
l`;
    const expected = '2';
    expect(solve(input)).toBe(expected);
  });

  it('should handle character not found', () => {
    const input = `typescript
z`;
    const expected = '0';
    expect(solve(input)).toBe(expected);
  });

  it('should handle single character string', () => {
    const input = `a
a`;
    const expected = '1';
    expect(solve(input)).toBe(expected);
  });

  it('should handle multiple occurrences', () => {
    const input = `programming
m`;
    const expected = '2';
    expect(solve(input)).toBe(expected);
  });
}); 