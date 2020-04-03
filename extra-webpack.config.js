const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  angularWebpackConfig.output.library = 'transactions';

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig
}