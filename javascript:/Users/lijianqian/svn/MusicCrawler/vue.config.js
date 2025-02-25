module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'node:stream': 'stream-browserify'
      }
    }
  },
  // 如果需要进一步配置 webpack 5，可以在这里添加 chainWebpack 或其他配置
  // chainWebpack: config => {
  //   // 你的 webpack 5 配置
  // }
}