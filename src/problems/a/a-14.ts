/**
 * 問題: 単語の個数カウント
 * 与えられた文字列に含まれる単語の個数を数える
 * 単語は空白で区切られているものとする
 *
 * 制約
 * 1 <= |S| <= 1000 (|S|は文字列Sの長さ)
 * 文字列は英数字と空白のみで構成される
 * 文字列の前後に余分な空白は含まれない
 *
 * 入力例
 * 'Hello world from TypeScript'
 *
 * 期待する出力
 * '4'
 */

export const solve = (input: string): string => {
  const S = input.trim();
  if (S === '') return '0';
  const words = S.split(/\s+/);
  return words.length.toString();
}; 