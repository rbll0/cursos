function tabuada() {
   const num = Number(document.getElementById('txti').value)
   const tabua = document.getElementById('tabuada')

   if ( num === 0 || Number.isNaN(num)) {
     window.alert('Por favor digite um valor correto')
   } else {
     for( let c = 1; c <= 10; c++) {
        const item = document.createElement('option')
        item.text = `${num} x ${c} = ${num * c}`
        item.appendChild(item)
     }
   }
}
