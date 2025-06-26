/**
 * 問題: 数値の合計
 * N個の整数が与えられるので、それらの合計を求める
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
 * '3
 * 1 2 3'
 *
 * 期待する出力
 * '6'
 * (1 + 2 + 3 = 6)
 */

export function solve(input: string): string {
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);
  return numbers.reduce((sum, num) => sum + num, 0).toString();
}
