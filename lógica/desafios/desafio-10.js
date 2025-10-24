function myFunction(a, b) {
  return Array.from(new Set(a.concat(b)));
  // return [...new Set([...a, ...b])];
}

console.log(myFunction([1, 2, 3], [4, 5, 6])) // [1, 2, 3, 4, 5, 6]
console.log(myFunction([6,7], [8,9])) // [6, 7, 8, 9]
console.log(myFunction([-2, -1, 0, 1, 2], [-1, 1, 2, 3])) // [-2, -1, 0, 1, 2, 3]
