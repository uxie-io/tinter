module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.jsx'],
  },
  darkMode: 'class',
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },

  theme: {
    extend: {
      colors: {
        'darkish-blue': '#182635',
        'darkish-black': '#1C1C1F',
        'grey-light': 'F5F5F5',
      },
      width: {
        '7/10': '70%',
        '3/10': '30%',
      },
      height: {
        '7/10': '70%',
        '3/10': '30%',
      },
      screens: {
        xs: '362px',
      },
    },
    fontFamily: {
      plex: ['"IBM Plex Sans"', 'sans-serif'],
      sans: [
        'Poppins',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],

  // variants: {
  //   backgroundColor: [
  //     'dark',
  //     'dark-hover',
  //     'dark-group-hover',
  //     'dark-even',
  //     'dark-odd',
  //     'hover',
  //     'responsive',
  //   ],
  //   borderColor: [
  //     'dark',
  //     'dark-focus',
  //     'dark-focus-within',
  //     'hover',
  //     'responsive',
  //   ],
  //   textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive'],
  // },
}
