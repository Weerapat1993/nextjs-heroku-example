const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/contact": { page: "/contact" },
    }
  },
  assetPrefix: !debug ? 'https://weerapat1993.github.io/next-js-heroku-example/' : '',
}