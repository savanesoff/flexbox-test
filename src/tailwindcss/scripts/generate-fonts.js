import fs from 'fs'
import path from 'path'
import process from 'process'
// import font definitions
import fonts from '../fonts/font-definitions.json' assert { type: 'json' }

const scssOutput = []
const htmlOutput = []

// Generate SCSS and HTML code
Object.keys(fonts).forEach(fontFamily => {
  Object.keys(fonts[fontFamily]).forEach(variant => {
    const { path: fontPath, weight } = fonts[fontFamily][variant]
    const normalizedPath = `./fonts/${fontPath}`

    // SCSS @font-face
    scssOutput.push(`@font-face {
            font-family: '${fontFamily.replace(/([A-Z])/g, ' $1').trim()}';
            src: url('${normalizedPath}') format('truetype');
            font-weight: ${weight};
        }`)

    // ensure html defeat font is set
    // HTML preload link
    htmlOutput.push(
      `<link rel="preload" href="${normalizedPath}" as="font" type="font/ttf" crossorigin="anonymous">`,
    )
  })
})

console.log('Creating font-face.scss')
// Write SCSS file
fs.writeFileSync(
  path.join(
    process.cwd(),
    'src',
    'tailwindcss/fonts',
    'generated-font-face.scss',
  ),
  scssOutput.join('\n'),
)

// Write HTML file
const htmlTemplate = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      ${htmlOutput.join('\n')}
      <title>Cobalt App</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
`

console.log('Creating index.html')
fs.writeFileSync(path.join(process.cwd(), 'src', 'index.html'), htmlTemplate)

console.log('Font generation complete')
