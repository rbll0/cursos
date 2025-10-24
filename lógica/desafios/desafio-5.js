function myFunction(fullname, flag = "") {
  const words = fullname.split(" ")
  
  if(flag === "firstname") {
    return words[0]
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (flag === "lastname") {
    return words.slice(1).join(" ")
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return words.slice(0).join(" ")
  } 

}

console.log(myFunction("John Williams Smith", "firstname"))
console.log(myFunction("John Williams Smith", "lastname"))
console.log(myFunction("John Williams Smith"))



