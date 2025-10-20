function verificar() {
   // biome-ignore lint/style/noVar: <explanation>
   var data = new Date()
   // biome-ignore lint/style/noVar: <explanation>
   var ano = data.getFullYear()
   // biome-ignore lint/style/noVar: <explanation>
   var fano = document.getElementById('txtano')
   // biome-ignore lint/style/noVar: <explanation>
   var res = document.querySelector('div#res')

   if (fano.value.lenght === 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente')
   } else {
      const fsex = document.getElementsByName('radsex')
      const idade = ano - Number(fano.value)
      let genero = ''
      const img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10 ) {
          img.setAttribute('src', 'assets/baby-man.jpg')
        } else if (idade < 21) {
           img.src = ''
        } else if (idade < 50) {
           img.src = ''
        } else {
           img.src = ''
        }



      } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10 ) {
          img.src = ''
        } else if (idade < 21) {
           img.src = ''
        } else if (idade < 50) {
           img.src = ''
        } else {
           img.src = ''
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
   }
}
