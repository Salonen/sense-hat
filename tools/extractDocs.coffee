fs = require 'fs'
chalk = require 'chalk'

SRC_PATH = './src/sense-hat.js'
README_TEMPLATE = './docs/README_TEMPLATE.md'
API_PLACEHOLDER = '[[[API]]]'
OUTPUT_PATH = './README.md'

apiDescription = ''
console.log "Processing #{chalk.cyan SRC_PATH}..."
code = fs.readFileSync SRC_PATH, 'utf8'
lines = code.split '\n'
fCode = false
for line in lines
  line = line.trim()

  # Code lines
  if (not line.length) or
     (line.indexOf('// --') isnt 0)
    if not fCode then apiDescription += '\n'
    fCode = true
    continue

  # Comment lines
  fCode = false
  line = line.slice 6

  apiDescription += "#{line}\n"

apiDescription = apiDescription.trim()

console.log "Reading #{chalk.cyan README_TEMPLATE}..."
readme = fs.readFileSync README_TEMPLATE, 'utf8'
finalReadme = readme.replace API_PLACEHOLDER, apiDescription
console.log "Writing #{chalk.cyan OUTPUT_PATH}..."
fs.writeFileSync OUTPUT_PATH, finalReadme, 'utf8'
console.log "Done"
