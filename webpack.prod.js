const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      // <-- key to reducing React's size
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CompressionPlugin(),
    new OptimizeCSSAssetsPlugin({}),
  ],
})
