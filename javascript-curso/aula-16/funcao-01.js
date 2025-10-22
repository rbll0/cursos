function parimpar(n) {
   if (n%2 === 0) {
     return 'Par'
   // biome-ignore lint/style/noUselessElse: <explanation>
   } else {
    return 'Impar'
   }
}

console.log(parimpar(223))
// biome-ignore lint/style/useConst: <explanation>
let res = parimpar(4)
console.log(res)
