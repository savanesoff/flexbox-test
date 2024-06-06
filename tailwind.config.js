/** @type {import('tailwindcss').Config} */
import {
  tabSizePlugin,
  buttonComponentsPlugin,
} from './src/tailwindcss/plugins/components'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,scss,css}', './public/index.html'],
  purge: ['./src/**/*.{js,jsx,ts,tsx,html,scss,css}', './public/index.html'],
  options: {
    // These options are optional but can help fine-tune the purge process
    safelist: [],
    blocklist: [],
    keyframes: true,
    fontFace: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    tabSize: {
      1: '1',
      2: '2',
      4: '4',
      8: '8',
    },
    extend: {
      // cannot extend the theme object as Cobalt
      // does not support the css properties
    },
  },
  variants: {
    extend: {},
  },
  plugins: [tabSizePlugin, buttonComponentsPlugin],
}
