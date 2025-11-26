// TODO: Converter todas as functions por arrow functions

function proc(age) {
  if (age < 18) {
    return '/index';
  }
    return '/home';
}

const proc2 = (age) => {
  if (age < 18) {
    return '/index';
  }
    return '/home';
} 

function sum(v1,v2) {
    return v1 + v2
}

const sum2 = (v1, v2) => v1 + v2;

function isPositive (v1) {
  return v1 > 0
}

const isPositive2 = (v1) => v1 > 0

// Encapsulamento
((name) => {
  // Balaio de código
  console.log(`Hello! ${name}`)
})('Gustavo')
