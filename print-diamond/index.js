/*
For a single row, we have 3 components:
  1. Side whitespace
  2. Center
  3. Side whitespace
For first row, number of spaces on left and right is the distance from first letter to selected letter
The Center's number of whitespace is the size of the previous row's Center.
*/
const printDiamond = letter => {
  let currentLetter = "A"
  const whitespace = " "
  const distToCenter = letter.toUpperCase().charCodeAt() - currentLetter.charCodeAt()
  const firstHalf = []
  let previousCenterSize = 0

  for (let r = 0; r <= distToCenter; r++) {
    const side = whitespace.repeat(distToCenter - r)
    const centerWhitespaceCount = previousCenterSize
    const center = r === 0
      ? currentLetter
      : `${currentLetter}${whitespace.repeat(centerWhitespaceCount)}${currentLetter}`
    firstHalf.push(`${side}${center}${side}`)
    currentLetter = String.fromCharCode(currentLetter.charCodeAt() + 1)
    previousCenterSize = center.length
  }
  const secondHalf = firstHalf.slice(0, firstHalf.length - 1).reverse()
  return firstHalf.concat(secondHalf).join("\n")
}


const start = "A"
console.time('Print All Diamonds')
for (let i = 0; i < 26; i++) {
  console.log("=====================================================")
  console.log(printDiamond(String.fromCharCode(start.charCodeAt() + i)))
  console.log("=====================================================")
}
console.timeEnd('Print All Diamonds')