const fizzbuzzPlus = (start, end) => {
  let result = ""
  for (let num = start; num <= end; num++) {
    let output = ""
    if (num % 3 === 0 || [...String(num)].includes("3")) {
      output += "Fizz"
    }
    if (num % 5 === 0 || [...String(num)].includes("5")) {
      output += "Buzz"
    }
    if (output === "") {
      output += num
    }
    result += `${output}\n`
  }
  console.log(result)
}

console.time("FizzBuzz-Plus")
fizzbuzzPlus(1, 100)
console.timeEnd("FizzBuzz-Plus")