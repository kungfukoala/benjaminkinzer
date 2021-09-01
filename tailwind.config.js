const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        mono: ['RegioMono-Light', 'RegioMono-SemiBold', ...defaultTheme.fontFamily.mono]
      },
        colors: {},
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face':
          {
            fontFamily: 'RegioMono-Light',
            fontStyle: 'normal',
            fontWeight: '400',
            src:
              "url('./fonts/RegioMonoLight-font.woff') format('woff2'), url('./fonts/RegioMonoLight-font.woff') format('woff')"
          },
          '@font-face':
            {
              fontFamily: 'RegioMono-SemiBold',
              fontStyle: 'bold',
              fontWeight: '800',
              src:
                "url('./fonts/RegioMonoSemiBold-font.woff') format('woff2'), url('./fonts/RegioMonoSemiBold-font.woff') format('woff')"
            },
      });
    })
  ],
};
