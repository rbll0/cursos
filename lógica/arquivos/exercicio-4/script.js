function verificar() {
  const inputN1 = document.getElementById('n1')
  const inputN2 = document.getElementById('n2')

  const n1 = Number(inputN1.value)
  const n2 = Number(inputN2.value)

  const res = document.getElementById('res')

  const media = ((n1 + n2) / 2).toFixed(1)

  if (media >= 6 ) {
    res.innerHTML = `
      A sua média é ${media}, você foi aprovado !!
    `
  } else if (media < 6 && media > 3) {
    res.innerHTML = `
      A sua média é ${media}, você está de recuperação  !!
    `
  } else {
    res.innerHTML = `
      A sua média é ${media}, você foi reprovado(a) tente melhorar !!
    `
  }
}
