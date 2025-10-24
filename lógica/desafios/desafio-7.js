function myFunction(a,b) {
  
  return b.match(new RegExp(a, "gi")).length

}

console.log(myFunction("a", "Quantas vezes o valor de 'a' ocorre aqui ?"))
console.log(myFunction("as", "Quantas vezes o valor de 'a' ocorre aqui ?"))
console.log(myFunction("q", "Quantas vezes o valor de 'a' ocorre aqui ?"))


