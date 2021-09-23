const path = require('path');

module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src/'),
    }
      config.module.rules = config.module.rules.map((rule) => {
          if (
              String(rule.test) ===
              String(
                  /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
              )
          ) {
              return {
                  ...rule,
                  test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
              }
          }

          return rule
      })
      config.module.rules.push({
          test: /\.(svg)(\?.*)?$/,
          use: ['@svgr/webpack'],
      })
    return config;
  }


}

