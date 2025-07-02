/**
 * 問題: 最大値と最小値
 * N個の整数が与えられるので、その中の最大値と最小値を求める
 * 出力は「最大値 最小値」の形式で行う
 *
 * 制約
 * 1 <= N <= 100
 * -1000 <= 各整数 <= 1000
 *
 * 入力形式
 * 1行目: 整数の個数N
 * 2行目: N個の整数（空白区切り）
 *
 * 入力例
 * '5
 * 3 1 4 1 5'
 *
 * 期待する出力
 * '5 1'
 * (最大値は5、最小値は1)
 */

export const solve = (input: string): string => {
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}; 