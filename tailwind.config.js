/** @type {import('tailwindcss').Config} */
import {
  tabSizePlugin,
  buttonComponentsPlugin,
  gapsPlugin,
} from './src/tailwindcss/plugins'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,scss,css}', './public/index.html'],
  options: {
    // These options are optional but can help fine-tune the purge process
    safelist: [],
    blocklist: [],
    keyframes: true,
    fontFace: true,
  },
  darkMode: 'media',
  theme: {
    fontFamily: {
      secondary: ['"Open Sans Condensed"', 'sans-serif'],
      primary: ['"Open Sans"', 'sans-serif'],
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    tabSize: {
      1: '1',
      2: '2',
      4: '4',
      8: '8',
    },
    extend: {
      screens: {
        540: '540px',
        720: '720px',
        1080: '1080px',
        '4k': '3840px',
      },
      fontSize: {
        sm: ['1rem'], // Custom font size for 'sm' screen
      },
    },
  },
  variants: {
    extend: {},
  },
  extend: {
    // extend default theme here
  },
  plugins: [tabSizePlugin, buttonComponentsPlugin, gapsPlugin],
}
