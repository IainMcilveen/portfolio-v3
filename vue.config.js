const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/GlobalVar.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/portfolio-v3/" : "/",
})
