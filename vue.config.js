// reference: https://cli.vuejs.org/config/
module.exports = {
  devServer: {
    // local api proxy
    proxy: {
      "^/graphql": {
        target: "http://localhost:5000/",
        changeOrigin: true,
      },
    },
    // dev cors
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    plugins: [],
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  },
  chainWebpack: (config) => {
    // config.module
    //   .rule("graphql")
    //   .test(/\.graphql$/)
    //   .use("graphql-tag/loader")
    //   .loader("graphql-tag/loader")
    //   .end();
  },
};
