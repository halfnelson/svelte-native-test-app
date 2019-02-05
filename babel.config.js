module.exports = function (api) {
  api.cache(true)

  return {
    // presets: [['@babel/env', { targets: { esmodules: true } }]],
    "presets": ["@babel/preset-typescript"]
  }
}
