// 注释
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 影响打包时的路径
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 排除以下文件夹，打包时不打包这些文件夹
  configureWebpack: {
    externals: {
      // 基本格式：
      // '包名' : '在项目中引入的名字'
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
      dayjs: 'dayjs',
      'element-ui': 'ELEMENT',
      'vue-quill-editor': 'VueQuillEditor',
      'vuex-persistedstate': 'createPersistedState'
    }
  }
})
