const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api' : '/'


module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
      config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_a', resolve('src/assets'))     
  
  },
  productionSourceMap: false,
  // devServer: {
  //   proxy: 'http://localhost:3000'
  // }
}
