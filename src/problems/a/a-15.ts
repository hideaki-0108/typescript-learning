/**
 * 問題: 配列の平均値
 * N個の整数が与えられるので、それらの平均値を求める
 * 平均値は小数点以下を切り捨てた整数で出力する
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
 * (1 + 2 + 3 + 4 = 10, 10 / 4 = 2.5, 小数点以下切り捨てで2)
 */

export const solve = (input: string): string => {
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = Math.floor(sum / numbers.length);
  return average.toString();
}; 