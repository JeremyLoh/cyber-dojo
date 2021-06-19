/*
A stack is used to keep track of opening parentheses
If we see an opening parentheses/bracket/brace, we add it to the stack
If we see a closing parentheses/bracket/brace, we attempt to remove an item from the stack.
    - If the stack is empty, error
    - If the obtained item from stack does not match the closing parentheses/bracket/brace, error
At end of function, if there is still something in the stack, it is not balanced!
*/
const helperFn = { 
  isOpeningParentheses: str => str === "(",
  isClosingParentheses: str => str === ")",
  isOpeningBrackets: str => str === "[",
  isClosingBrackets: str => str === "]",
  isOpeningBraces: str => str === "{",
  isClosingBraces: str => str === "}",
}
const isSameStrType = (a, b) => {
  const [x, y] = [a, b].sort()
  const isParentheses = helperFn.isOpeningParentheses(x) && helperFn.isClosingParentheses(y)
  const isBrackets = helperFn.isOpeningBrackets(x) && helperFn.isClosingBrackets(y)
  const isBraces = helperFn.isOpeningBraces(x) && helperFn.isClosingBraces(y)
  return isParentheses || isBrackets || isBraces
}

const balancedString = (str) => {
  if (str.trim().length === 0) {
    return true
  }
  const stack = []
  const arr = [...str.trim()]
  const size = arr.length
  for (let i = 0; i < size; i++) {
    const s = arr[i]
    if (helperFn.isOpeningBraces(s) || helperFn.isOpeningBrackets(s) || helperFn.isOpeningParentheses(s)) {
      stack.unshift(s)
    } else {
      const item = stack.shift()
      if (!item || !isSameStrType(s, item)) {
        return false
      }
    }
  }
  return stack.length === 0
}

const balanced = ["[({})]", "{}([])", "{()}[[{}]]", "[()]{}{[()()]()}"]
const notBalanced = ["({)}", "{{)(}}", "[(])"]

console.time("Balanced String")
balanced.forEach(str => console.log(balancedString(str)))
console.timeEnd("Balanced String")

console.time("Not Balanced String")
notBalanced.forEach(str => console.log(balancedString(str)))
console.timeEnd("Not Balanced String")