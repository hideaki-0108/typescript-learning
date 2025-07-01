/**
 * 問題: 文字カウント
 * 与えられた文字列の中に、指定された文字が何個含まれているかを数える
 * なお入力値は必ず文字列で与えられる
 *
 * 制約
 * 1 <= |S| <= 100 (|S|は文字列Sの長さ)
 * Cは英小文字1文字
 * Sは英小文字のみで構成される
 *
 * 入力例
 * 'hello
 * l'
 *
 * 期待する出力
 * '2'
 */

export const solve = (input: string): string => {
  const [S, C] = input.trim().split('\n');
  const count = S.split('').filter(entry => entry === C).length;
  return count.toString();
};