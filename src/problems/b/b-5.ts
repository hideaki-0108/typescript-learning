/**
 * 問題: 偶数・奇数カウント
 * N個の整数が与えられる。偶数の個数と奇数の個数をそれぞれ出力せよ。
 *
 * 制約
 * 1 <= N <= 1000
 * 1 <= A_i <= 10000
 *
 * 入力例
 * '5 1 2 3 4 5'
 *
 * 出力例
 * '2 3'
 * （偶数: 2,4の2個、奇数: 1,3,5の3個）
 */

export const solve = (input: string): string => {
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);
  const even = numbers.filter((n: number) => n % 2 === 0).length;
  const odd = numbers.filter((n: number) => n % 2 !== 0).length;

  return `${even} ${odd}`;
};
