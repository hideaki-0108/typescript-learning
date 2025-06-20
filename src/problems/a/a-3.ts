/**
 * 問題: 配列の範囲（最大値 - 最小値）
 * 与えられた配列の最大値と最小値の差を求める
 * なお入力値は必ず文字列で与えられる
 *
 * 制約
 * 1 <= N <= 100000
 * 1 <= A_i <= 100000
 *
 * 入力例
 * '5 3 1 4 1 5 9 2 6 5 3'
 *
 * 期待する出力
 * '8'
 */

export const solve = (input: string): string => {
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);

  const maxNum = Math.max(...numbers);
  const minNum = Math.min(...numbers);

  const result = String(maxNum - minNum);
  return result;
};
