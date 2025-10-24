function myFunction(num) {
  if (num % 2 === 0) {
    return true
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return false
  }
}

console.log(myFunction(8))
console.log(myFunction(-10))
console.log(myFunction(7))
console.log(myFunction(-41))
