/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  pages: {
    index: {
      entry: 'src/render/main.ts',
      template: 'public/index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src/render')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  pluginOptions: {
    electronBuilder: {
      // Use this to change the entrypoint of your app's main process
      mainProcessFile: 'src/main/index.ts'
    }
  }
}
