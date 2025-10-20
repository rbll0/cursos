function carregar() {
  // biome-ignore lint/style/noVar: <explanation>
  var msg = window.document.getElementById('msg')
  // biome-ignore lint/style/noVar: <explanation>
  var img = window.document.getElementById('img')
  // biome-ignore lint/style/noVar: <explanation>
  var data = new Date()
  // biome-ignore lint/style/noVar: <explanation>
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 && hora < 12) {
    img.src = 'assets/morning.jpg'
    document.body.style.background = 'rgb(70, 142, 236)'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'assets/afternoon.jpg'
    document.body.style.background = 'rgba(211, 132, 30, 0.79)'
  } else {
    img.src = 'assets/night.jpg'
    document.body.style.background = 'rgb(23, 20, 41)'
  }
}


