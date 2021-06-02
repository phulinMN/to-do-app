module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // as of sass-loader 8, `data` needs to be `prependData`.
        additionalData: `@import "~@/assets/scss/main.scss";`
      }
    }
  }
};
