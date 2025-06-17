const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Recipe Web Page",
    },
  },
  configureWebpack: {
    plugins: [
      new (require("webpack").DefinePlugin)({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      }),
    ],
  },
  devServer: {
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
    proxy: {
      "/Login": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/Register": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/Logout": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/users": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/recipes": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
