const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: "jquery",
      _: 'underscore',
    })
  ],
  externals: {
    jquery: '$',
    lodash: '_',
    FM: 'FM',
    kintone: 'kintone',
    Swal: 'Swal',
    underscore: '_'
  },

  // モジュールバンドルを行う起点となるファイルの指定
  // 指定できる値としては、ファイル名の文字列や、それを並べた配列やオブジェクト
  // 下記はオブジェクトとして指定した例
  entry: {
    bundle: './src/Core.ts'
  },
  output: {
    // モジュールバンドルを行った結果を出力する場所やファイル名の指定
    // "__dirname"はこのファイルが存在するディレクトリを表すnode.jsで定義済みの定数
    path: path.join(__dirname,'dist'),
    filename: '[name].js'  // [name]はentryで記述した名前(この例ではbundle）が入る
  },
  // モジュールとして扱いたいファイルの拡張子を指定する
  // 例えば「import Foo from './foo'」という記述に対して
  // "foo.ts"という名前のファイルをモジュールとして探す
  // デフォルトは['.js', '.json']
  resolve: {
    extensions:['.ts','.js']
  },
  // モジュールに適用するルールの設定（ここではローダーの設定を行う事が多い）
  module: {
    rules: [
      {
        // 拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
        test:/\.ts$/,
        loader:'ts-loader',
        exclude: /node_modules/
      }
      //{
      //  loader: 'babel-loader',
      //  options: {
      //    presets: [['@babel/preset-env', { modules: false }]]
      //  }
      //}
    ]
  }
}
