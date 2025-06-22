# TypeScript Learning

## 📋 概要

このリポジトリは、TypeScript の学習とアルゴリズム問題の解決を通じて、実践的なプログラミングスキルを身につけることを目的としています。基本は AtCoder を参考に AI に問題を作成してもらってます。

## 🛠️ 技術スタック

- **TypeScript** - メイン言語
- **Jest** - テストフレームワーク
- **Vite** - ビルドツール
- **ts-jest** - TypeScript 用 Jest 設定
- **ESLint** - コード品質チェック
- **Prettier** - コードフォーマッター

## 🚀 セットアップ

### 前提条件

- Node.js (v20.11.1 を使用)

### インストール

```bash
# 依存関係をインストール
npm install
```

## 📝 使用方法

### テストの実行

```bash
# 全テストを実行
npm test

# 特定のテストファイルを実行
npm test tests/a/a-2.test.ts

# ウォッチモードで実行（ファイル変更時に自動再実行）
npm run test:watch

# 詳細出力で実行
npm test -- --verbose

# カバレッジ付きで実行
npm test -- --coverage
```

### コード品質管理

```bash
# ESLintでコードをチェック
npm run lint

# ESLintで自動修正
npm run lint:fix

# Prettierでコードをフォーマット
npm run format

# Prettierでフォーマットをチェック（修正なし）
npm run format:check
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 📁 テストについて

各問題には対応するテストファイルが用意されています。テストは以下の形式で記述するように心がけています！

```typescript
import { describe, it, expect } from '@jest/globals';
import { solve } from '../../src/problems/a/a-2.js';

describe('A-2', () => {
  it('should solve the problem correctly', () => {
    const input = `3 1 4 1 5 9 2 6 5 3`;
    const expected = `1 2 3 4 5 6 9`;
    expect(solve(input)).toBe(expected);
  });
});
```

## 📚 学習の進め方

1. **問題を作る**: 各問題ファイルに問題を作成してもらう
2. **実装する**: `solve` 関数を実装
3. **テストする**: `npm test` でテストを実行
4. **改善する**: コードの可読性や効率性を向上

## 🔧 開発環境

### TypeScript 設定

- **ターゲット**: ES2020
- **モジュール**: ESNext
- **厳密モード**: 有効
- **未使用変数チェック**: 有効

### Jest 設定

- **環境**: Node.js
- **プリセット**: ts-jest (ESM 対応)
- **テストパターン**: `**/*.test.ts`

### コード品質管理

- **ESLint**: TypeScript用の厳密なルール設定
- **Prettier**: 一貫したコードフォーマット
- **保存時自動修正**: VSCodeで保存時に自動的にフォーマット・修正

## 🤝 コントリビューション

新しい問題を追加する場合は、以下の形式に従ってください

1. `src/problems/[category]/[problem-id].ts` に実装
2. `tests/[category]/[problem-id].test.ts` にテスト
3. 問題の説明と制約をコメントで記載

## 📄 ライセンス

このプロジェクトは学習目的で作成されています。
