function verificar() {
	const i = Number(document.getElementById("txti").value);
	const end = Number(document.getElementById("txtf").value);
	const res = document.getElementById("res");

	let result = "";

	for (let c = i; c >= end; c--) {
		result += `${c} `;
	}
	res.innerHTML = `${result} Fim` ;
}
