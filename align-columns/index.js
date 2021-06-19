const newline = "\n"

const alignColumns = (text) => {
  const lines = text.split(newline)
  if (lines.length <= 1) {
    return text
  }

  const wordsInLine = []
  lines.forEach(line => {
    const wordList = line.trim().split("$").filter(word => word.length > 0)
    wordsInLine.push(wordList)
  })

  const wordLength = []
  wordsInLine.forEach(wordList => {
    wordLength.push([...wordList].map(w => w.length))
  })
  
  const colMaxLength = [...wordLength[0]]
  wordLength.forEach(wordList => {
    wordList.forEach((len, index) => {
      if (index >= colMaxLength.length) {
        colMaxLength.push(len)
      } else if (len > colMaxLength[index]) {
        colMaxLength[index] = len
      }
    })
  })

  const output = []
  wordsInLine.forEach(line => {
    line.forEach((word, index) => {
      const spacesToAdd = 1 + Number(colMaxLength[index]) - word.length
      output.push(`${word}${" ".repeat(Math.max(0, spacesToAdd))}`)
    })
    output.push(newline)
  })

  return output.join("")
}

const text = "Given$a$text$file$of$many$lines,$where$fields$within$a$line$" + newline +
  "are$delineated$by$a$single$'dollar'$character,$write$a$program" + newline +
  "that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$" + newline +
  "column$are$separated$by$at$least$one$space."

console.time("Align Columns")
console.log(alignColumns(text))
console.timeEnd("Align Columns")