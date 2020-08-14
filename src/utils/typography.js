import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  scaleRatio: 2.0,
  googleFonts: [
    {
      name: 'Inter',
      styles: ['300', '500', '700'],
    },
  ],
  headerFontFamily: ['Inter'],
  bodyFontFamily: ['Inter'],
});

export default typography;
