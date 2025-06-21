import { solve } from '../../src/problems/a/a-4';

describe('a-4: 配列の偶数要素の個数', () => {
  test('基本的なテストケース', () => {
    expect(solve('5 3 1 4 1 5 9 2 6 5 3')).toBe('3');
  });

  test('偶数が1つの場合', () => {
    expect(solve('6 3 1 5 7 2 9')).toBe('1');
  });

  test('偶数が複数ある場合', () => {
    expect(solve('8 4 2 6 8 10 1 3 5')).toBe('5');
  });

  test('偶数がない場合', () => {
    expect(solve('6 3 1 5 7 9 11')).toBe('0');
  });

  test('すべて偶数の場合', () => {
    expect(solve('5 2 4 6 8 10')).toBe('5');
  });

  test('1つの要素の場合', () => {
    expect(solve('2 1 7')).toBe('0');
    expect(solve('2 1 8')).toBe('1');
  });
});
