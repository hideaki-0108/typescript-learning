/**
 * 問題: 文字列の反転
 * 与えられた文字列を逆順にして出力する
 * なお入力値は必ず文字列で与えられる
 *
 * 制約
 * 1 <= |S| <= 100 (|S|は文字列Sの長さ)
 * Sは英小文字のみで構成される
 *
 * 入力例
 * 'hello'
 *
 * 期待する出力
 * 'olleh'
 */

export const solve = (input: string): string => {
  const S = input.trim();
  return S.split('').reverse().join('');
}; 