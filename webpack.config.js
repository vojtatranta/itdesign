const fs = require('fs')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const yargs = require('yargs')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const HTML = fs.readFileSync('./index.html', 'utf-8')

const args = yargs
    .alias('p', 'production')
    .alias('r', 'render')
    .argv

args.production = args.render || args.production

if (args.production) {
  process.env.NODE_ENV = 'production'
}

const definPlugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(args.production ? 'production' : 'development'),
  },
  '__DEVTOOLS__': !args.production,
  '__DEV__': !args.production,
})

const plugins = args.production ? [
  new ExtractTextPlugin('style.css', { allChunks: true }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false,
    },
    comments: false,
  }),
  new StaticSiteGeneratorPlugin('index', ['/index.html'], {
    HTML,
  }),
  new webpack.optimize.DedupePlugin(),
  definPlugin,
] : [definPlugin]


module.exports = {
  debug: !args.production, // nastavuje mod loaderům
  devtool: args.production ? 'source-map' : 'eval-source-map',
  entry: {
    index: './server-render.js',
    bundle: [
      'babel-polyfill',
      './src/index.js',
    ],
  },
  output: {
    path: './docs/',
    filename: '[name].js',
    libraryTarget: args.production ? 'umd' : undefined,
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.css', '.js'],
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
      },
      {
        test: /\.html$/,
        loader: 'text',
      },
      {
        test: /\.css$/,
        loader: args.production ? ExtractTextPlugin.extract('style-loader', 'css-loader?minimize') : 'style!css',
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'url?limit=25000',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ],
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader',
      },
    ],
  },
}
