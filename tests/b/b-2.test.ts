import { describe, expect, it } from '@jest/globals';
import { distributeCandy } from '../../src/problems/b/b-2';

describe('B-2', () => {
  it('should return Yes', () => {
    const n = 3;
    const m = 10;
    const k = 4;

    expect(distributeCandy(n, m, k)).toBe('Yes');
  });

  it('should return No', () => {
    const n = 2;
    const m = 10;
    const k = 4;

    expect(distributeCandy(n, m, k)).toBe('No');
  });

  it('should return No', () => {
    const n = 3;
    const m = 1;
    const k = 4;

    expect(distributeCandy(n, m, k)).toBe('No');
  });

  it('should return Yes', () => {
    const n = 3;
    const m = 9;
    const k = 3;

    expect(distributeCandy(n, m, k)).toBe('Yes');
  });
});
