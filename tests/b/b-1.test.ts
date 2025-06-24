import { describe, expect, it } from '@jest/globals';
import { passCheck } from '../../src/problems/b/b-1.js';

describe('B-1', () => {
  it('should validate correct password', () => {
    const input = 'Password123';
    const expected = 'Valid';
    expect(passCheck(input)).toBe(expected);
  });

  it('should reject password without uppercase', () => {
    const input = 'password123';
    const expected = 'Invalid';
    expect(passCheck(input)).toBe(expected);
  });

  it('should reject password without digit', () => {
    const input = 'Password';
    const expected = 'Invalid';
    expect(passCheck(input)).toBe(expected);
  });

  it('should reject short password', () => {
    const input = 'Pass1';
    const expected = 'Invalid';
    expect(passCheck(input)).toBe(expected);
  });

  it('should reject long password', () => {
    const input = 'VeryLongPassword123456';
    const expected = 'Invalid';
    expect(passCheck(input)).toBe(expected);
  });
});
