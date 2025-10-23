function verificar() {
  const inputAge = document.getElementById('txti')
  const value = inputAge.value.trim()
  const age = Number(value)

  const res = document.getElementById('res')

  if(age === '' || age === 0 ){
    res.innerHTML = `
      <p>Digite a idade corretamente</p>
    `
  }

  if(age >= 18 && age < 60) {
    res.innerHTML = 
    `
      <p>Você é Adulto, e tem ${age}</p>
    `
  } else if (age < 18){
      res.innerHTML = 
      `
      <p>Você é menor de idade, e tem ${age} anos</p>
      `
  } else {
    res.innerHTML = 
    `
    <p>Você é Idoso, e tem ${age} anos</p>
    `
  }
}
