/**
 * 問題: ペア探索
 * 2つの配列A、Bが与えられる。
 * A[i] + B[j] = Kとなるペア(i, j)の個数を求める。
 * なお入力値は必ず文字列で与えられる
 *
 * 制約
 * 1 <= N, M <= 1000
 * 1 <= A[i], B[j] <= 1000
 * 1 <= K <= 2000
 *
 * 入力例
 * '3 2 5
 * 1 3 4
 * 2 3'
 *
 * 期待する出力
 * '3'
 */

export const solve = (input: string): string => {
  const lines = input.trim().split('\n');
  
  // 1行目: N, M, K (NとMは配列サイズなので、実際は使用しない)
  const K = parseInt(lines[0].split(' ')[2]);
  
  // 2行目: 配列A
  const A = lines[1].split(' ').map(Number);
  
  // 3行目: 配列B
  const B = lines[2].split(' ').map(Number);

  let count = 0;
  
  // 全探索: A[i] + B[j] = K となるペアを数える
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] + B[j] === K) {
        count++;
      }
    }
  }
  
  return count.toString();
}; 