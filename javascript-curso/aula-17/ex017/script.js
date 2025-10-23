const list = [];

function adicionar() {
  const inputNumber = Number(document.getElementById("txtn").value);
  const selectNumber = document.getElementById("number");
  const res = document.getElementById('res');

	if (inputNumber === 0 || Number.isNaN(inputNumber)) {
		window.alert("Valor inválido ou não encontrado");
	} else if (inputNumber < 1 || inputNumber > 100) {
		window.alert("Valor fora do intervalo, digite novamente");
	} else if (list.includes(inputNumber)) {
		window.alert("Valor duplicado ou já presente na lista");
	} else {
		list.push(inputNumber);

		const item = document.createElement("option");
		item.text = `Valor adicionado ${inputNumber}`;
		selectNumber.appendChild(item);
		
		res.innerHTML = '';
		document.getElementById("txtn").value = '';
	}
}

function finalizar() {
  const res = document.getElementById('res')

  if( list.length === 0) {
    window.alert('Adicione valores antes de finalizar')
  } else {
    const tam = list.length

    const max = Math.max(...list)
    const min = Math.min(...list)

    const soma = list.reduce((acc, val) => acc + val, 0);
    const media = soma / list.length

    res.innerHTML = `
      Ao todo, temos ${tam} números cadastrados.<br>
      O maior valor informado foi ${max}.<br>
      O menor valor informado foi ${min}.<br>
      Somando todos os valores, temos ${soma}.<br>
      A média dos valores digitados é ${media.toFixed(2)}
    `;
  }
}
