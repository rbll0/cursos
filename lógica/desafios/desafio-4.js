function myFunction(text,flag = "start") {

  if(flag === "end" && text.length >= 3) {
    return text.substring(text.length -3)
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (flag === "start" && text.length >= 3) {
    return text.substring(text,3)
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return text
  }
} 

console.log(myFunction("abcdefg", "start"))
console.log(myFunction("abcdefg", "end"))
console.log(myFunction("ab", "end"))
console.log(myFunction("abcdefg"))

