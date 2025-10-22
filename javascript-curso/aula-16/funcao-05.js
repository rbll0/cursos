// Recursivade
function fatorial(n) {
  if (n === 1) {
    return 1
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return n * fatorial(n-1)
  }
}

console.log(fatorial(5))
