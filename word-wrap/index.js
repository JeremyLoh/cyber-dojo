const wordWrap = (string, width) => {
  const words = string.split(/\s/)
  let currentWidth = 0
  let output = ""
  words.forEach(word => {
    // Between each word, there is an additional whitespace
    const wordLen = word.length
    const isWordWhitespace = word === ""
    const canAddWord = isWordWhitespace ? (currentWidth + 1) <= width
      : (currentWidth + wordLen + 1) <= width
    if (canAddWord) {
      output += isWordWhitespace ? " " 
        : word + " "
      currentWidth = isWordWhitespace ? currentWidth + 1
        : currentWidth + wordLen
    } else {
      output += "\n" + word + " "
      currentWidth = isWordWhitespace ? 1 
        : wordLen + 1
    }
  })
  return output
}

const fs = require('fs')
try {
  const data = fs.readFileSync('bee.txt', 'utf8')
  console.time("Word Wrap")
  console.log(wordWrap(data, 42))
  console.timeEnd("Word Wrap")
} catch (err) {
  console.error(err)
}