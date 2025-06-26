import { describe, expect, it } from '@jest/globals';
import { solve } from '../../src/problems/a/a-6';

describe('A-6', () => {
  it('should convert 25 celsius to 77 fahrenheit', () => {
    const input = '25';
    const expected = '77';
    expect(solve(input)).toBe(expected);
  });

  it('should convert 0 celsius to 32 fahrenheit', () => {
    const input = '0';
    const expected = '32';
    expect(solve(input)).toBe(expected);
  });

  it('should convert negative temperature', () => {
    const input = '-10';
    const expected = '14';
    expect(solve(input)).toBe(expected);
  });

  it('should convert 100 celsius to 212 fahrenheit', () => {
    const input = '100';
    const expected = '212';
    expect(solve(input)).toBe(expected);
  });

  it('should handle decimal result with floor', () => {
    const input = '30';
    const expected = '86';
    expect(solve(input)).toBe(expected);
  });
});
