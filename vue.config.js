const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const ImageminPngquant = require("imagemin-pngquant");
const imageminSvgo = require("imagemin-svgo");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

// global styles
// module.exports = {

// }

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/global/styles/helpers/_variables";
          @import "@/global/styles/helpers/_mixins";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rule("eslint").use("eslint-loader").options({
      fix: true,
    });
  },
  configureWebpack: {
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    plugins: [
      new VuetifyLoaderPlugin(),
      // image optimization (png, jpg, svg)
      new ImageminPlugin({
        disable: process.env.NODE_ENV !== "production",
        plugins: [
          ImageminMozjpeg({
            quality: 90,
          }),
          ImageminPngquant({
            quality: [0.85, 0.9],
          }),
          imageminSvgo({
            plugins: [
              { removeViewBox: false },
              { removeUnusedNS: false },
              { removeUselessStrokeAndFill: false },
              { cleanupIDs: false },
              { removeComments: true },
              { removeEmptyAttrs: true },
              { removeEmptyText: true },
              { collapseGroups: true },
            ],
          }),
        ],
      }),
      // image optimization (webp)
      new ImageminWebpWebpackPlugin({
        config: [
          {
            test: /\.(jpe?g|png)/,
            options: {
              quality: 90,
            },
          },
        ],
      }),
    ],
  },
};
