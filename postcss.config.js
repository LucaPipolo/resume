const postcssPresetEnv = require(`postcss-preset-env`);
const precss = require(`precss`);
const cssnano = require(`cssnano`);
const postcssImport = require(`postcss-import`);
const postcssCustomMedia = require(`postcss-custom-media`);
const postcssResponsiveType = require(`postcss-responsive-type`);
const postcssHexRgba = require(`postcss-hexrgba`);

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
    precss,
    cssnano,
    postcssImport,
    postcssCustomMedia,
    postcssResponsiveType,
    postcssHexRgba,
  ],
});
