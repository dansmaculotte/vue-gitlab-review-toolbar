const { resolve } = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

dotenv.config()

module.exports = {
  entry: './fixture/main.js',
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'GITLAB_PROJECT_ID': JSON.stringify(process.env.GITLAB_PROJECT_ID),
      'GITLAB_MERGE_REQUEST_ID': JSON.stringify(process.env.GITLAB_MERGE_REQUEST_ID),
      'GITLAB_PERSONAL_ACCESS_TOKEN': JSON.stringify(process.env.GITLAB_PERSONAL_ACCESS_TOKEN)
    })
  ]
}
