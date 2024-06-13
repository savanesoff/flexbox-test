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
    tabSize: {
      1: '1',
      2: '2',
      4: '4',
      8: '8',
    },
    // spacing: {
    //   2: '25rem', // example custom spacing rules
    // },
    extend: {
      // cannot extend the theme object as Cobalt
      // does not support the css properties
    },
  },
  variants: {
    extend: {},
  },
  extend: {
    screens: {
      '540p': '540px',
      '720p': '720px',
      '1080p': '1080px',
      '4k': '3840px',
    },
  },
  plugins: [tabSizePlugin, buttonComponentsPlugin, gapsPlugin],
}
