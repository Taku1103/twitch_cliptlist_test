# 開発メモ

## 毎日やること

### コアタイム
21:00 - 23:00をコアタイムとして、VCに集まるようにする。直接話した方が良い相談等はここで。

### チーム内日報
- 今日の成果
- 次やること
- 詰まってること
- 重要共有事項

を書いて、共有しておく。共有しておくことで、相談時にスムーズに進んだり、詰まっているときに助けやすくなる。

## 全体の流れ
1. `git pull origin main`でリモートのmainブランチから最新ソースを取得
2. `git switch -c "#f64_add_fav_playlist"`などで開発用ブランチに切り替え
3. 開発を行う
4. `git add .`で修正/追加したファイルをすべてコミット対象とする
5. `Ctrl(Command) + Shift + p`でEmoji Prefixをつけてローカルコミット
6. `git push`でローカルコミットしたものをリモートブランチにpushする
7. PullRequestを書く
8. (コードレビューを依頼してapproveされる)
9. mainブランチにマージする
10. 開発用のローカルブランチとリモートブランチを削除

## 注意点まとめ
- Branchの切り方、Branch名、Commitメッセージ、レビューのルールを守る
- mainからブランチを切る前に必ずpull
- Commitの粒度は細かいと嬉しい
- ブランチを切った状態で、長い間手元で止めない(コンフリクト予防)
  - 一部が未完成でも、長い間手元で止めるくらいならプルリクを送る
- ルールはいつでも変更できるし、多少ミスってても別に問題ないので細かいことは気にしすぎずに

## ルール詳細

### Branchの切り方
- release // (mainが一区切りついたときに置いておくブランチ)
- main // (各々が開発した部分をマージするブランチ)
- それ以外 // (各々が開発するブランチ)

の3種類を使用する。開発時のブランチ名は次の規則に従ってつける。

### Branch名
ブランチ名は "#" + [フロント/サーバー/すべて] + [タスク番号] + タスクの名前 という法則でつける。

- フロント：f
- サーバー：s
- すべて:a

統一されていれば違う記号でも良いので、その場合はこの部分を更新してほしい。

例)

"#f64_add_fav_playlist"

"#s43_get_clip"

"#a1_set_environment"

### Commitメッセージ
`git add .`で変更を追加し、`Ctrl(Command) + Shift + p`からEmoji Prefixを選択してcommitする。

- 機能追加(✨)： 一塊の機能追加
- 機能改善(👍): ちょっとでも何かを改善したらこれ

どれにするか迷ったら👍選んでおけばOK。これ機能か？みたいなやつも迷ったら👍にしておけばOK。

### レビュー
レビューはしてほしい場合のみ、discordでメンションを行う。その際、見てほしい人全員にメンションを行うこと。

(人を指定せずにレビュー依頼をしない。必ず見てほしい人を指定する。)

---

# Rails+MySQL+Next.js環境の作成

## Dockerとは
Dockerはカーネルだけはホストのものを利用し、それ以外はコードから生成されたミドルウェアを使うことで、手軽にOSを作ったり消したりできるようなものです。
これにより、以下の利点があります。
- コード化されたファイルを共有することで、どこでも誰でも同じ環境が作れる。
- 作成した環境を配布しやすい。
- スクラップ＆ビルドが容易にできる。
Dockerはイメージファイルと呼ばれる元データから、実際のデータ格納場所であるコンテナをビルド(作成)します。
また、docker-composeは複数のコンテナをビルドしたり、dockerコマンドをコードとして管理するために使用します。
今回はこのDockerとdocker-composeを使用して環境構築を行うため、この2つの準備ができていれば、後は手順通りにコマンドを打てば環境構築は完了します。

## できあがる環境
- [http://localhost:3000](http://localhost:3000)にアクセスするとNext.jsのページにアクセス可能
- [http://localhost:3001](http://localhost:3001)にアクセスするとRailsのページにアクセス可能
- RailsのDBはMySQLで管理する
という状態になります。

追記：mynetworkに接続する設定にしたので、Next.jsからRails APIのデータをfetchするときは[http://api:3000](http://api:3000)にアクセスしてください。
railsのみ、ホスト側とコンテナ内でのポート番号の対応が違うので、コンテナに直接接続するこの指定の仕方だと、ポート番号が3001ではなく3000になります。

## 環境構築の手順
### Rails+MySQL環境構築

はじめに、すべてのコンテナをmynetworkという名前のネットワークに接続する設定にしたので、以下のコマンドを実行してmynetworkを生成してください。
(これを設定していないときにNext.jsからRails APIのデータをfetchしようとしてエラー吐いたことがあったので、一応入れてます。)
```
docker network create mynetwork
```

それでは、backendから構築していきます。まずは以下を実行してください。
```
docker-compose run --rm api rails new . --force --database=mysql --api
```

次にデータベースの設定をします。/backend/config/database.ymlを次のコードで書き換えてください。

```yml
default: &default
  adapter: mysql2
  encoding: utf8mb4
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  username: root
  password: password
  host: db

development:
  <<: *default
  database: api_development

test:
  <<: *default
  database: api_test

production:
  <<: *default
  database: api_production
  username: api
  password: <%= ENV["API_DATABASE_PASSWORD"] %>
```

次にGemfileを以下のコードで書き換えます。
```ruby
source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

gem "rails", "~> 7.0.8"
gem "mysql2", "~> 0.5"
gem "puma", "~> 5.0"
gem "bcrypt", "~> 3.1.7"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false
gem "rack-cors"

group :development, :test do
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
end
```

Gemfileを更新したので、次のコマンドを実行します。これによって、apiコンテナ起動時にbundle installが実行され、Gemfileの変更がコンテナに反映されます。
```
docker-compose build
```

次にフロントから呼び出せるようにCORSの設定をしておきます。
backend/config/initializers/cors.rbを以下のコードで書き換えてください。

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "localhost:3000"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

最後にコンテナを起動してDBを作成します。
docker-compose upというコンテナの起動コマンドにdオプションをつけることで、現在使用中のコンソールを使うことなく、バックグラウンドで起動できます。
バックグラウンドで起動中は、DockerDesktopの該当コンテナを選択すると、ログを確認することもできます。

```
docker-compose up -d
docker-compose exec api rails db:create
```

[http://localhost:3001](http://localhost:3001)にアクセスして、Railsの初期ページが表示されることを確認してください。
これでバックエンドの環境構築は終了です。
この時点では、DockerDesktopで確認したときにfrontのコンテナが灰色になっていますが、気にしなくて大丈夫です。

### Next.js環境構築

次にfrontendを構築していきます。以下を実行してください。
なんか色々聞かれるので、最初のTypeScriptの使用だけNoで答えて、他は全部Enterで大丈夫です。

```
docker-compose run --rm front sh -c 'npx create-next-app . '
```

最後にfrontコンテナを起動してみましょう。

```
docker-compose up -d front
```

[http://localhost:3000](http://localhost:3000)にアクセスして、Next.jsの初期画面が表示されることを確認してください。
また、page.tsxの中身を変更して、ホットリロードが発生するかも試してみてください。

## 使い方
### 注意事項
- docker-compose execなんちゃらでコンテナ内を直接操作しているとき、git commitはしない方が良い。コンテナ内はビルドする度に毎回別世界なので、gitの設定も毎回初期化されている。
そのため、git add, git commit, git pushをしたいときは、exitでコンテナの外にでてから行う。
- DBの中身はGithubを通じて共有されないので、モデルを共有して何かを試したい場合は、seed.rbとかに書いて、他の人の環境でモデルを生成できるようにしておく。
- Rails serverは起動する際にbackend/tmp/pids/server.pidを生成する。そして、このファイルがあるときに新しくRails serverを起動することはできない。そのため、何故かRails serverが起動しないときは、このファイルがないかを確認し、あったら削除すると起動するようになる。

### すべてのコンテナを一気に起動する
```
docker-compose up -d
```

### rails serverの起動方法
backendのDockerfileにコンテナ起動時にrails serverを起動するコマンドが書いてあるので、コンテナを起動すればrails serverも起動する。
```
docker-compose up -d api
```

### rails serverの停止方法
```
docker-compose stop api
```

### container内のrailsに直接変更を加える方法
rails generateをしたり、rails consoleに入りたい場合は、以下のコマンドでコンテナ内のLinux環境にアクセスすることができる。
```
docker-compose exec api bash
```

### rails serverのログをみたい
新しいコンソールを開いて、/backendに入る。
```
docker attach twitch-cliplist-api-1
```
とすれば、rails serverのログが見れる。(どこにアクセスすればよいかは`dokcer ps`でコンテナ名を確認するのが一番確実)
この状態でdebuggerを走らせれば、ここから変数の中身を見たり操作できる。
抜けるときはCtrl+p -> Ctrl+q
Ctrl+Cをしても良いが、それだとserverが落ちる。

### Next.jsの起動方法
```
docker-compose up -d front
```

### rails serverの停止方法
```
docker-compose stop front
```

### container内のNext.jsに直接変更を加える方法
```
docker-compose exec front bash
```

## フロントからバックエンドの情報が取得できないとき
特に、ECONNREFUSEDというエラーが発生しているときは、localhost経由ではなく、docker network経由でアクセスする必要があります。
一応rails, MySQL, Next.jsを接続するmynetworkという名前のdocker networkを生成してあるので、コンテナ間のアクセスはlocalhostではなくコンテナ名を指定してアクセスすることができるはずです。

### step1
`http://localhost:3001/api`にアクセスしてapiのデータを取得していたが、これを`http://api:3000/api`に変更

### step2
なんかRailsのミドルウェアでエラーを吐くことがあるので、config/application.rbのclass Application < Rails::Applicationの中に`config.middleware.delete ActionDispatch::HostAuthorization`を追記。

これでデータのfetchがうまく行くはず。

## 参考記事
- [Dockerを使ってRails7, React18の開発環境を構築します](https://zenn.dev/925rycki/articles/655462e9c76906)

## 署名
全員がpushテストとかするなら、ここに書き込んでもらおうかな的なこと思ったけど、別にやらなくても良い。
