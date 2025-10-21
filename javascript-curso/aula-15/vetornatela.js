// biome-ignore lint/style/useConst: <explanation>
let valores = [8, 1, 9, 6, 4, 3]
valores.sort()
// for(let pos = 0; pos < valores.length; pos++) {
//   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

// biome-ignore lint/style/useConst: <explanation>
for(let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
