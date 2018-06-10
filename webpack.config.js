const {
  createConfig,
  defineConstants,
  addPlugins,
  env,
  entryPoint,
  setOutput
} = require('@webpack-blocks/webpack2')

const webpack = require('webpack')
const babel = require('@webpack-blocks/babel6')
const postcss = require('@webpack-blocks/postcss')
const extractText = require('@webpack-blocks/extract-text2')

const nodeEnv = {
  'process.env.NODE_ENV': process.env.NODE_ENV
}

const productionPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  })
]

module.exports = createConfig([
  entryPoint('./_js/main.js'),
  setOutput('./bundle.js'),
  babel(),
  postcss(),
  extractText('style.min.css'),
  defineConstants(nodeEnv),
  env('production', [ addPlugins(productionPlugins) ])
])
