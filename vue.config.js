module.exports = {
  publicPath: "./",
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        ws: false,
        target: "http://localhost:7001/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".json", ".vue", ".scss", ".css"],
      alias: {},
    },
    externals: {
      "mavon-editor": "MavonEditor",
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      "element-ui": "ELEMENT",
      Axios: "axios",
      nprogress: "NProgress",
      marked: "marked",
      "highlight.js": "hljs",
      swiper: "Swiper",
      "e-charts": "echarts",
    },
  },
};
