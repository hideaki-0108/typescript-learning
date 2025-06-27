/**
 * 問題: 最大値の出力
 * N個の整数が与えられるので、その中の最大値を出力してください。
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
 * 3 7 1 4 2'
 *
 * 期待する出力
 * '7'
 */
export function solve(input: string): string {
  const [, ...numbers] = input.trim().split(/\s+/);
  const max = Math.max(...numbers.map(Number));
  return max.toString();
}
