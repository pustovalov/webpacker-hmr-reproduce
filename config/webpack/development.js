process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const { merge } = require('@rails/webpacker')

const webpackConfig = require('./base')

const customConfig = {
  stats: {
    errorDetails: true,
    errors: true,
    colors: true,
    optimizationBailout: true,
    modules: true,
  },
}

const developmentConfig = merge(webpackConfig, customConfig)

module.exports = developmentConfig
