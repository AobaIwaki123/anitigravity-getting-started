# 【無料で使えるGoogle Antigravity】 Cursorと同等の開発体験でChrome拡張を作ってみた

## はじめに

毎回同じフォームに同じ情報を入力する作業、面倒ですよね。
私の大学では、体育施設の利用申請時に所定の項目を入力する必要があり、毎週同じ作業を繰り返していました。

**Before**: 数分かけて手動で入力  
**After**: ページを開いた瞬間にすべての入力が完了

そこで、この面倒な作業を自動化するChrome拡張機能を開発することにしました。
使用したのは、Googleが提供する**無料のAIコーディングアシスタント「Antigravity」**です。

### この記事で得られること

- **Google AntigravityとCursorの使用感の比較**
- Antigravityを使った実際の開発体験
- 無料でも高品質なコード生成が可能であることの実証
- Chrome拡張機能の開発事例（簡易版）

## Google Antigravity vs Cursor：使用感の比較

### Cursorとは

Cursorは、AI支援機能を搭載した人気の有料コードエディタです（月額$20〜）。
コード生成、リファクタリング、バグ修正などをAIがサポートしてくれます。

### Antigravityの使用感

実際にChrome拡張を開発してみて感じたのは、**「Cursorとほぼ変わらない開発体験」**でした。

#### 良かった点

- **コード生成の品質が高い**: manifest.json、popup.html、content.jsなど、必要なファイルを適切に生成
- **文脈を理解した提案**: フォームの構造を理解し、各入力タイプに応じた処理を実装
- **反復的な改善が可能**: 「ここをこう変えて」という指示に的確に対応
- **完全無料**: Cursorの有料プランと同等の機能が無料で使える

#### 注意点

- モデルはGemini ProとClaude Sonnet 4.5が選べますが、Claudeの方が体感安定します

### 結論：無料でもCursor並みの開発が可能

Chrome拡張のような小規模のプロジェクトであれば、Antigravityで十分に高品質な開発が可能です。
特に、個人開発や学習目的であれば、まずAntigravityを試してみることをおすすめします。

## 開発したChrome拡張の概要

今回開発したのは、**フォーム自動入力Chrome拡張**です。

### 主な機能

1. **設定画面（popup）**: 入力したい情報を事前に登録
2. **自動入力（content script）**: 対象ページを開くと自動で入力
3. **データ保存（Chrome Storage API）**: 設定を保存して再利用

### 技術スタック

- Manifest V3
- Chrome Storage API
- Content Scripts

詳細な実装方法は[GitHubリポジトリ](https://github.com/AobaIwaki123/anitigravity-getting-started/tree/main/sports-facility-autofill)を参照してください。

## 開発の流れ（簡易版）

Antigravityに以下のような指示を出すだけで、ほぼ完成形のコードが生成されました。

1. **「体育施設予約フォームを自動入力するChrome拡張を作りたい」**
   → プロジェクト構成とmanifest.jsonを生成

2. **「設定画面で名前、学籍番号、利用目的を入力できるようにして」**
   → popup.htmlとpopup.jsを生成

3. **「フォームの各フィールドを自動入力するロジックを実装して」**
   → content.jsを生成

4. **「ラジオボタンとチェックボックスにも対応させて」**
   → content.jsを改善

このように、**自然言語での指示だけで実装が進む**のがAntigravityの強みです。

## まとめ

### Antigravityを使ってみた感想

- **Cursorと同等の開発体験が無料で得られる**
- コード生成の品質が高く、実用的なアプリケーションが作れる
- 小さな不便を見つけたら、すぐに解決ツールを作れる時代になった

### 小さな面倒も無視しないことで、課題発見能力が上がる (...多分)

「毎週数分の手間」を放置せず、自動化ツールを作ることで：
- 時間の節約だけでなく、課題発見能力が磨かれる
- AIツールを使えば、実装のハードルは大きく下がる

日常の小さな不便を見つけたら、ぜひAntigravityで解決してみてください。
無料で、Cursor並みの開発体験が待っています。

---

**GitHub**: [ソースコード全文](https://github.com/AobaIwaki123/anitigravity-getting-started/tree/main/sports-facility-autofill)
