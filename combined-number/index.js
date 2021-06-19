// Permute over all possible combinations
const combinedNumber = (numbers, current = "", permutations = []) => {
  const size = numbers.length
  if (size === 0) {
    return current
  }
  for (let i = 0; i < size; i++) {
    const start = numbers[i]
    const rest = numbers.filter(n => n !== start)
    const nextValue = String(start) + String(current)
    permutations.push(nextValue)
    combinedNumber(rest, String(start) + String(current), permutations)
  }
  return Math.max(...permutations.map(p => Number(p)))
}

console.time("Combined Number")
console.log(combinedNumber([50, 2, 1, 9]))
console.log(combinedNumber([5, 50, 56]))
console.log(combinedNumber([420, 42, 423]))
console.timeEnd("Combined Number")