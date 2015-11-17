var fs = require('fs')

function generateContentsByFileName(fileName) {
  var content = fs.readFileSync(fileName, 'utf-8')
  fs.writeFileSync(fileName, content)
}

generateContentsByFileName('JavaScript.md')