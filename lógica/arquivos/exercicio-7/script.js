function verificar() {
	const f = Number(document.getElementById('txtf').value)
  const res = document.querySelector('div#res')

  const list = []
  let result = 0 
  
  for(let c = 1; c <= f; c++) {
    if (c % 2 === 0) {
      list.push(c);
    } 
  }

  for(let i = 0; i < list.length; i++ ) {
    result += list[i]
  }

  res.innerHTML = `
    A soma dos números ${result}
  `
}
