function count() {
   let i = document.getElementById('txti').value
   let f = document.getElementById('txtf').value
   let p = document.getElementById('txtp').value
   let res = document.getElementById('res')

   if (i.length == 0 || f.length == 0 || p.length == 0) {
      window.alert('[ERRO] Verificar os dados para seguirmos com a contagem.')
   } else {
      res.innerHTML = 'Preparando contagem...'
      let inicio = Number(i)
      let fim = Number(f)
      let passo = Number(p)

      if(passo <= 0) {
          window.alert('Passo inválido! Considerando PASSO 1')
          passo = 1
      }

      if (inicio < fim) {
        for(let c = inicio; c <= fim; c += passo) {
          res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
      } else {
        for(let c = inicio; c >= fim; c -= passo) {
          res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += ` \u{1F3C1}`
      }
   }

}
