const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    'storybook-css-modules-preset',
  ],
  webpackFinal: async (config) => {
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];
    config.module.rules[0].use[0].options.plugins = [
      require.resolve('@babel/plugin-proposal-class-properties'),
      require.resolve('babel-plugin-remove-graphql-queries'),
    ];
    config.resolve.mainFields = ['browser', 'module', 'main'];
    config.module.rules.push({
      test: /\.css$/,
      loader: 'postcss-loader',
      options: {
        plugins: () => [
          require('precss'),
          require('postcss-import'),
          require('postcss-custom-media'),
          require('postcss-responsive-type'),
        ],
      },
      include: path.resolve(__dirname, '../'),
    });
    return config;
  },
};
