/**
 * 問題: 最大値と最小値の差
 * N個の整数が与えられる。最大値と最小値の差を出力せよ。
 *
 * 制約
 * 1 <= N <= 1000
 * 1 <= A_i <= 10000
 *
 * 入力例
 * '4 10 3 8 6'
 *
 * 出力例
 * '7'
 * （最大値10、最小値3、差は7）
 */

export const solve = (input: string): string => {
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return (max - min).toString();
};
