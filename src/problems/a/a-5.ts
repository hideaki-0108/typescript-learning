/**
 * 問題: 配列の逆順
 * 与えられた配列の要素を逆順にして返す
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
 * '3 5 6 2 9 5 1 4 1 3 5'
 */

export const solve = (input: string): string => {
  // 入力値をスペースで分割、配列に格納する
  const [, ...numbers] = input.trim().split(/\s+/).map(Number);

  // 配列を逆順にして文字列に変換
  const reversedNumbers = numbers.reverse();

  // 結果をスペースで結合して返す
  return reversedNumbers.join(' ');
};
