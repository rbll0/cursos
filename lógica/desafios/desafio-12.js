function myFunction(min, max) {
  const result = []
  for (let i = min; i <= max; i++) {
    result.push(i)
  }
  return result
}

console.log(myFunction(1,5)) // [1,2,3,4,5]
console.log(myFunction(11,18)) //[11,12,13,14,15,16,17,18]
console.log(myFunction(-5,5)) //[-5,-4,-3,-2,-1,0,1,2,3,4,5]
