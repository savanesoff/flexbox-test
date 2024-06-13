import plugin from 'tailwindcss/plugin'

export const gapsPlugin = plugin(function ({ addUtilities, theme }) {
  const newUtilities = {}
  Object.entries(theme('spacing')).map(([name, value]) => {
    newUtilities[`.row-gap-${name} > * + *`] = { marginRight: `${value}` }
    newUtilities[`.col-gap-${name} > * + *`] = { marginTop: `${value}` }
  })
  addUtilities(newUtilities)
})
