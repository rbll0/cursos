function verificar() {
  const inputInit = Number(document.getElementById('txti').value)
  const inputMid = Number(document.getElementById('txtm').value)
  const inputEnd = Number(document.getElementById('txte').value)

  const list = [inputInit, inputMid, inputEnd]
  const greaterValue = Math.max(...list)

  const res = document.getElementById('res')

  res.innerHTML = `
    <p>O maior valor inserido é ${greaterValue}</p>
  `
}
