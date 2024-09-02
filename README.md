# ホームページ with Astro

## 技術スタック

- Astro
- TypeScript
- Tailwind CSS
- Kibela GraphQL API

## 必要なもの

- Bun

## セットアップ

1. このリポジトリをクローン
2. `bun install` を実行

## 開発

### 開発サーバー

```sh
bun dev
```
実行すると `http://localhost:4321` に開発サーバーが立ち上がります. ファイルを編集すると自動的にブラウザに反映されます.

### ビルド

```sh
bun run --bun build
```
実行後、`build/` ディレクトリにビルドされたファイルが出力されます. これを本番環境でデプロイします.

### プレビュー

```sh
bun preview
```
ビルドしたファイルをローカルサーバーでプレビューします.

### リンタ

```sh
bun lint
```

Biome を用いてコードをチェックします. Prettier によるフォーマットのチェックも行われます.

### フォーマット

```sh
bun fmt
```

Prettier を用いてコードをフォーマットします. Biome によるコードの修正も行われます
