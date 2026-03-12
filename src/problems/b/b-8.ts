/**
 * 問題：https://atcoder.jp/contests/abc446/tasks/abc446_b
 */

export const solve = (input: string) => {
  // --- パース ---
  // trim() で末尾の改行・空白を除去してからsplit()する
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  const lines = input
    .trim()
    .split('\n')
    .map((line) => line.trim());

  // 1行目: "N M"
  const [N] = lines[0].split(' ').map(Number);

  // 各客の希望リストを取り出す
  // フォーマット: L_i 行 → "X_{i,1} ..."行が交互に並ぶ
  // lines[1] = L_1, lines[2] = "X_{1,1} ...", lines[3] = L_2, lines[4] = "X_{2,1} ..." ...
  const wishlists: number[][] = [];
  for (let i = 0; i < N; i++) {
    const listLine = lines[2 + i * 2]; // X_{i,j}が並ぶ行
    // L_i === 0 のとき listLine が空文字になるのでfilterで弾く
    wishlists.push(
      listLine ? listLine.split(' ').filter(Boolean).map(Number) : []
    );
  }

  // --- シミュレーション ---
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
  const taken = new Set<number>(); // すでに選ばれた缶番号

  const results = wishlists.map((list) => {
    // 希望リストを先頭から見て、まだ取られていない最初の缶を選ぶ
    const juice = list.find((x) => !taken.has(x));
    if (juice !== undefined) {
      taken.add(juice);
      return juice;
    }
    return 0; // 全部取られていたら水
  });

  return results.join('\n');
};
