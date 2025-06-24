/**
 * 問題: パスワードの強度チェック
 * 与えられた文字列がパスワードの条件を満たしているかチェックする
 * なお入力値は必ず文字列で与えられる
 *
 * パスワードの条件:
 * 1. 長さが8文字以上12文字以下
 * 2. 大文字を少なくとも1文字含む
 * 3. 小文字を少なくとも1文字含む
 * 4. 数字を少なくとも1文字含む
 *
 * 制約
 * 1 <= パスワードの長さ <= 50
 * パスワードは英数字のみ
 *
 * 入力例
 * 'Password123'
 *
 * 期待する出力
 * 'Valid' (条件を満たす場合)
 * 'Invalid' (条件を満たさない場合)
 */

export const passCheck = (pass: string): 'Valid' | 'Invalid' => {
  const returnValid = 'Valid';
  const returnInvalid = 'Invalid';
  const trimPass = pass.trim();

  // 1. 長さが8文字以上12文字以下
  if (trimPass.length < 8 || trimPass.length > 12) {
    return returnInvalid;
  }

  // 2. 文字種チェック
  const hasUpper = /[A-Z]/.test(trimPass);
  const hasLower = /[a-z]/.test(trimPass);
  const hasNumber = /[0-9]/.test(trimPass);

  if (!hasUpper || !hasLower || !hasNumber) {
    return returnInvalid;
  }

  return returnValid;
};
