/**
 * 問題: 偶数の個数
 * N個の整数が与えられるので、その中に含まれる偶数の個数を出力してください。
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
 * '4
 * 1 2 3 4'
 *
 * 期待する出力
 * '2'
 * (2と4が偶数)
 */
export function solve(input: string): string {
  const [, ...numbers] = input.trim().split(/\s+/);
  const evenCount = numbers.filter((number) => Number(number) % 2 === 0).length;
  return evenCount.toString();
}
