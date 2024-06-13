/**
 * This script generates SCSS classes for all Tailwind CSS classes.
 * This is done due to the fact that TW relies on CSS variables for its classes, which are not supported in Cobalt Browser.
 *
 * Generating TW classes in such a way may prevent TW form optimizing its footprint, but it's a trade-off for compatibility.
 *
 * Run this file using Node.js to generate the SCSS classes file for updated Tailwind package.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const generateScssClasses = theme => {
  let scssContent = `@import 'tailwindcss/base';\n@import 'tailwindcss/components';\n@import 'tailwindcss/utilities';\n\n`

  const sanitizeClassName = className => {
    return className.replace(/\//g, '\\/').replace(/\./g, '\\.')
  }

  const addClass = (className, properties) => {
    scssContent += `${className} {\n`
    for (const property in properties) {
      scssContent += `  ${property}: ${properties[property]};\n`
    }
    scssContent += `}\n\n`
  }

  const addClasses = (prefix, themeSection, cssProperty) => {
    const section = theme(themeSection)
    for (const key in section) {
      if (Array.isArray(section[key])) {
        const className = sanitizeClassName(`${prefix}-${key}`)
        addClass(`.${className}`, {
          [cssProperty]: `theme('${themeSection}[${key}][0]')`,
        })
      } else if (typeof section[key] === 'object') {
        for (const subKey in section[key]) {
          const className = sanitizeClassName(`${prefix}-${key}-${subKey}`)
          addClass(`.${className}`, {
            [cssProperty]: `theme('${themeSection}[${key}][${subKey}]')`,
          })
        }
      } else {
        const className = sanitizeClassName(`${prefix}-${key}`)
        addClass(`.${className}`, {
          [cssProperty]: `theme('${themeSection}[${key}]')`,
        })
      }
    }
  }

  // Adding classes for various Tailwind properties
  addClasses('bg', 'backgroundColor', 'background-color')
  addClasses('text', 'textColor', 'color')
  addClasses('border', 'borderColor', 'border-color')
  addClasses('border', 'borderWidth', 'border-width')
  addClasses('font', 'fontFamily', 'font-family')
  addClasses('text', 'fontSize', 'font-size')
  addClasses('leading', 'lineHeight', 'line-height')
  addClasses('tracking', 'letterSpacing', 'letter-spacing')
  addClasses('p', 'padding', 'padding')
  addClasses('pt', 'paddingTop', 'padding-top')
  addClasses('pr', 'paddingRight', 'padding-right')
  addClasses('pb', 'paddingBottom', 'padding-bottom')
  addClasses('pl', 'paddingLeft', 'padding-left')
  addClasses('m', 'margin', 'margin')
  addClasses('mt', 'marginTop', 'margin-top')
  addClasses('mr', 'marginRight', 'margin-right')
  addClasses('mb', 'marginBottom', 'margin-bottom')
  addClasses('ml', 'marginLeft', 'margin-left')
  addClasses('w', 'width', 'width')
  addClasses('h', 'height', 'height')
  addClasses('min-w', 'minWidth', 'min-width')
  addClasses('min-h', 'minHeight', 'min-height')
  addClasses('max-w', 'maxWidth', 'max-width')
  addClasses('max-h', 'maxHeight', 'max-height')
  addClasses('flex', 'flex', 'flex')
  addClasses('order', 'order', 'order')
  addClasses('grid', 'gridTemplateColumns', 'grid-template-columns')
  addClasses('space-x', 'space', 'margin-right')
  addClasses('space-y', 'space', 'margin-bottom')
  addClasses('rounded', 'borderRadius', 'border-radius')
  addClasses('shadow', 'boxShadow', 'box-shadow')
  addClasses('opacity', 'opacity', 'opacity')
  addClasses('z', 'zIndex', 'z-index')
  addClasses('scale', 'scale', 'transform')
  addClasses('rotate', 'rotate', 'transform')
  addClasses('translate', 'translate', 'transform')
  addClasses('skew', 'skew', 'transform')
  addClasses('flex-grow', 'flexGrow', 'flex-grow')
  addClasses('flex-shrink', 'flexShrink', 'flex-shrink')
  addClasses('justify', 'justifyContent', 'justify-content')
  addClasses('items', 'alignItems', 'align-items')
  addClasses('content', 'alignContent', 'align-content')
  addClasses('self', 'alignSelf', 'align-self')
  addClasses('place-content', 'placeContent', 'place-content')
  addClasses('place-items', 'placeItems', 'place-items')
  addClasses('place-self', 'placeSelf', 'place-self')
  addClasses('overflow', 'overflow', 'overflow')
  addClasses('overflow-x', 'overflowX', 'overflow-x')
  addClasses('overflow-y', 'overflowY', 'overflow-y')
  addClasses('overscroll', 'overscrollBehavior', 'overscroll-behavior')
  addClasses('overscroll-x', 'overscrollBehaviorX', 'overscroll-behavior-x')
  addClasses('overscroll-y', 'overscrollBehaviorY', 'overscroll-behavior-y')
  addClasses('position', 'position', 'position')
  addClasses('top', 'inset', 'top')
  addClasses('right', 'inset', 'right')
  addClasses('bottom', 'inset', 'bottom')
  addClasses('left', 'inset', 'left')
  addClasses('inset', 'inset', 'inset')
  addClasses('visibility', 'visibility', 'visibility')
  addClasses('cursor', 'cursor', 'cursor')
  addClasses('pointer-events', 'pointerEvents', 'pointer-events')
  addClasses('resize', 'resize', 'resize')
  addClasses('user-select', 'userSelect', 'user-select')

  // Add direction-specific inset classes using top, right, bottom, left
  const insets = theme('inset')
  Object.keys(insets).forEach(key => {
    const sanitizedKey = sanitizeClassName(key)
    addClass(`.inset-x-${sanitizedKey}`, {
      left: `theme('inset[${key}]')`,
      right: `theme('inset[${key}]')`,
    })
    addClass(`.inset-y-${sanitizedKey}`, {
      top: `theme('inset[${key}]')`,
      bottom: `theme('inset[${key}]')`,
    })
  })

  // Add direction-specific gap classes using margins
  const gaps = theme('gap')
  Object.keys(gaps).forEach(key => {
    const sanitizedKey = sanitizeClassName(key)
    addClass(`.row-gap-${sanitizedKey} > * + *`, {
      'margin-left': `theme('gap[${key}]')`,
      'margin-right': '0',
    })
    addClass(`.col-gap-${sanitizedKey} > * + *`, {
      'margin-top': `theme('gap[${key}]')`,
      'margin-bottom': '0',
    })
  })

  return scssContent
}

const scssClasses = generateScssClasses(section => fullConfig.theme[section])

fs.writeFileSync(
  path.resolve(__dirname, 'src/tailwindcss/generated-tailwind.scss'),
  scssClasses,
)
console.log('Generated Tailwind SCSS classes successfully.')

export { generateScssClasses }
