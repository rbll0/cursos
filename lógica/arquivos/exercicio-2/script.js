function verificar() {
  const inputNumber = document.getElementById('txti')
  const value = inputNumber.value
  const n = Number(value)
  
  const res = document.getElementById('res')

  if (n % 2 === 0) {
    res.innerHTML = `
      <p>O número ${n}, é par !!</p>
    `
  } else {
    res.innerHTML = `
      <p>O número ${n}, é impar !!</p>
    `
  }
}
