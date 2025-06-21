import { solve } from '../../src/problems/a/a-5';

describe('a-5: 配列の逆順', () => {
  test('基本的なテストケース', () => {
    expect(solve('11 3 1 4 1 5 9 2 6 5 3')).toBe('3 5 6 2 9 5 1 4 1 3');
  });

  test('短い配列', () => {
    expect(solve('3 1 2 3')).toBe('3 2 1');
  });

  test('2つの要素', () => {
    expect(solve('2 5 10')).toBe('10 5');
  });

  test('同じ数字が複数ある場合', () => {
    expect(solve('4 1 1 1 1')).toBe('1 1 1 1');
  });

  test('連続した数字', () => {
    expect(solve('5 1 2 3 4 5')).toBe('5 4 3 2 1');
  });
});
