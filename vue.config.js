module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/multipage-project/'
    : '/',
  //去掉文件后的哈希值
  filenameHashing: false,
  //去掉source map，加速生成环境构建
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081/meol8ys', // 接口的域名
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/pages/index/index.js',
      // 模板来源就是在public里面创建的入口文件名
      template: 'public/index.html',
      // 编译后在 dist文件夹中的输出文件名，可选项，省略时默认与模块名一致
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要时 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '首页',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，也就是只有entry属性时，直接用字符串表示模块入口
    test: {
      // page 的入口
      entry: 'src/pages/test/test.js',
      // 模板来源就是在public里面创建的入口文件名
      template: 'public/test.html',
      // 编译后在 dist文件夹中的输出文件名，可选项，省略时默认与模块名一致
      filename: 'test.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要时 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '测试'
    },
    // 当使用只有入口的字符串格式时，也就是只有entry属性时，直接用字符串表示模块入口
    homework: {
        // page 的入口
        entry: 'src/pages/homework/homework.js',
        // 模板来源就是在public里面创建的入口文件名
        template: 'public/homework.html',
        // 编译后在 dist文件夹中的输出文件名，可选项，省略时默认与模块名一致
        filename: 'homework.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要时 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '作业'
      }
  }
}