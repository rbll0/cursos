import { fazCalculoComplexo } from "./biblioteca.js"

const qtdeE1 = document.querySelector('#quantidade')
const precoE1 = document.querySelector('#preco')
const totalE1 = document.querySelector('#total')

// biome-ignore lint/style/useConst: <explanation>
for(let campoE1 of [qtdeE1, precoE1]) {
  campoE1.addEventListener('input', () => {
    const quantidade = qtdeE1.value
    const preco = precoE1.value
    const total = fazCalculoComplexo(quantidade, preco)
    totalE1.value = total
  })
}
