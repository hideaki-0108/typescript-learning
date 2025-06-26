import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-7';

describe('A-7', () => {
  it('should identify palindrome with spaces', () => {
    const input = 'A man a plan a canal Panama';
    const expected = 'Yes';
    expect(solve(input)).toBe(expected);
  });

  it('should identify simple palindrome', () => {
    const input = 'racecar';
    const expected = 'Yes';
    expect(solve(input)).toBe(expected);
  });

  it('should identify non-palindrome', () => {
    const input = 'hello';
    const expected = 'No';
    expect(solve(input)).toBe(expected);
  });

  it('should handle single character', () => {
    const input = 'a';
    const expected = 'Yes';
    expect(solve(input)).toBe(expected);
  });

  it('should handle case insensitive palindrome', () => {
    const input = 'Aa';
    const expected = 'Yes';
    expect(solve(input)).toBe(expected);
  });

  it('should handle palindrome with mixed case', () => {
    const input = 'Madam';
    const expected = 'Yes';
    expect(solve(input)).toBe(expected);
  });
});
