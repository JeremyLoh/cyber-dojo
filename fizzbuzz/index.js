const fizzbuzz = (start, end) => {
  let result = ""
  for (let num = start; num <= end; num++) {
    let output = ""
    if (num % 3 === 0) {
      output += "Fizz"
    }
    if (num % 5 === 0) {
      output += "Buzz"
    }
    if (output === "") {
      output += num
    }
    result += `${output}\n`
  }
  console.log(result)
}

console.time("Run FizzBuzz")
fizzbuzz(1, 100)
console.timeEnd("Run FizzBuzz")