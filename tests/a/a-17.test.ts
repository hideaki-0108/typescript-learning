import { solve } from '../../src/problems/a/a-17.js';

describe('A-17', () => {
  describe('Sample test cases', () => {
    test('Sample 1: N=3, M=2 should return 4', () => {
      expect(solve(3, 2)).toBe(4);
    });
  });

  describe('Edge cases - minimum values', () => {
    test('N=1, M=1 should return 0 (no pairs can be made)', () => {
      expect(solve(1, 1)).toBe(0);
    });

    test('N=0, M=0 should return 0', () => {
      expect(solve(0, 0)).toBe(0);
    });

    test('N=2, M=1 should return 1 (only girl pair)', () => {
      expect(solve(2, 1)).toBe(1);
    });

    test('N=1, M=2 should return 1 (only boy pair)', () => {
      expect(solve(1, 2)).toBe(1);
    });

    test('N=2, M=2 should return 2 (1 girl + 1 boy pair)', () => {
      expect(solve(2, 2)).toBe(2);
    });
  });

  describe('General cases', () => {
    test('N=3, M=3 should return 6 (3 + 3)', () => {
      expect(solve(3, 3)).toBe(6);
    });

    test('N=4, M=5 should return 16 (6 + 10)', () => {
      expect(solve(4, 5)).toBe(16);
    });

    test('N=7, M=4 should return 27 (21 + 6)', () => {
      expect(solve(7, 4)).toBe(27);
    });

    test('N=10, M=5 should return 55 (45 + 10)', () => {
      expect(solve(10, 5)).toBe(55);
    });
  });

  describe('Larger values', () => {
    test('N=100, M=100 should return 9900 (4950 + 4950)', () => {
      expect(solve(100, 100)).toBe(9900);
    });

    test('N=1000, M=1000 should return 999000', () => {
      expect(solve(1000, 1000)).toBe(999000);
    });
  });

  describe('Asymmetric cases', () => {
    test('N=6, M=3 should return 18 (15 + 3)', () => {
      expect(solve(6, 3)).toBe(18);
    });

    test('N=3, M=6 should return 18 (3 + 15)', () => {
      expect(solve(3, 6)).toBe(18);
    });
  });

  describe('Formula verification', () => {
    test('Manual calculation: N=5, M=4', () => {
      // N=5: 5*4/2 = 10
      // M=4: 4*3/2 = 6
      // Total: 16
      expect(solve(5, 4)).toBe(16);
    });

    test('Both equal: N=8, M=8', () => {
      // N=8: 8*7/2 = 28
      // M=8: 8*7/2 = 28
      // Total: 56
      expect(solve(8, 8)).toBe(56);
    });
  });
});
