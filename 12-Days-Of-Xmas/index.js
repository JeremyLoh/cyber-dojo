// Construct from last line to first
const lines = {
  2: "Two turtle doves",
  3: "Three french hens",
  4: "Four calling birds",
  5: "Five golden rings",
  6: "Six geese a-laying",
  7: "Seven swans a-swimming",
  8: "Eight maids a-milking",
  9: "Nine ladies dancing",
  10: "Ten lords a-leaping",
  11: "Eleven pipers piping",
  12: "Twelve drummers drumming",
}

const getDayPhrase = (dayNum) => {
  const newline = "\n"
  const day = ["", "first", "second", "third", "forth", "fifth", "sixth", "seventh", "eight", "ninth", 
    "tenth", "eleventh", "Twelfth"]
  const phrase = []
  phrase.unshift(dayNum === 12 ? "And a partridge in a pear tree." 
  : "A partridge in a pear tree.")
  for (let lineNum = 2; lineNum <= dayNum; lineNum++) {
    phrase.unshift(lineNum === 2 && dayNum < 12 
      ? `${lines[lineNum]} and`
      : lines[lineNum])
  }
  phrase.unshift("My true love gave to me:")
  phrase.unshift(`On the ${day[dayNum]} day of Christmas,`)  
  return phrase.join(newline)
}

const xmasCarol = () => {
  const newline = "\n"
  const output = []
  Array.from(Array(12).keys()).reverse().forEach(dayNum => {
    const currentDayPhrase = []
    currentDayPhrase.unshift(getDayPhrase(dayNum + 1))
    output.unshift(currentDayPhrase.join(newline))
  })
  return output.join(newline + newline)
}

console.time("Xmas carol")
console.log(xmasCarol())
console.timeEnd("Xmas carol")