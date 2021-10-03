const webpack = require('webpack')
const { webpackConfig, merge } = require('@rails/webpacker')

const customConfig = {
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.erb',
      '.js',
      '.jsx',
      '.sass',
      '.scss',
      '.css',
      '.module.sass',
      '.module.scss',
      '.module.css',
      '.png',
      '.svg',
      '.gif',
      '.jpeg',
      '.jpg',
    ],
  },
}

const baseConfig = merge(webpackConfig, customConfig)

module.exports = baseConfig
