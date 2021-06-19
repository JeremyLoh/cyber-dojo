const calcStats = (numbers) => {
  const total = numbers.reduce((prevValue, currentVal) => prevValue + currentVal)
  const count = numbers.length
  console.log(`o) minimum value = ${Math.min(...numbers)}`)
  console.log(`o) maximum value = ${Math.max(...numbers)}`)
  console.log(`o) number of elements in the sequence = ${count}`)
  console.log(`o) average value = ${(total / count).toFixed(6)}`)
}

console.time("Calculate Stats")
calcStats([6, 9, 15, -2, 92, 11])
console.timeEnd("Calculate Stats")