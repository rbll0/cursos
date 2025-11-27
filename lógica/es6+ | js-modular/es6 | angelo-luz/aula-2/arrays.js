const clients = [
  {name: 'Angelo Luz', birth: 1986, genre: 'M', purchaseDaysAgo: 10},
  {name: 'Chuck', birth: 1940, genre: 'M', purchaseDaysAgo: 5},
  {name: 'Sansa Stark', birth: 2002, genre: 'F', purchaseDaysAgo: 32},
  {name: 'Dean winchester', birth: 1982, genre: 'M', purchaseDaysAgo: 45},
  {name: 'Ricardo Botelho da Silva', birth: 1993, genre: 'M', purchaseDaysAgo: 29},
  {name: 'Ragnar', birth: 1960, genre: 'M', purchaseDaysAgo: 25},
  {name: 'Elias Wojahn', birth: 1989, genre: 'M', purchaseDaysAgo: 15},
]

let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
console.log(ages)

//TODO: Altera todos os valores em +1
ages = ages.map(value => value + 1)
console.log('ages :', ages)

// biome-ignore lint/complexity/noForEach: <explanation>
ages.forEach(element => {
  console.log(element)  
});

//TODO: Retorna todos os valores ímpares
const impares = ages.filter(value => value % 2 === 1)
console.log('impares :', impares)

// TODO: Altera todos os valores ímpares para o próximo par
ages = ages.map(value => (value % 2 === 1 ? value + 1: value))
console.log('ages:', ages)

//TODO: Cria um novo array com os valores menores do que 20 de numbers
const menores = ages.filter(value => value < 20)
console.log('Menores do que 20:', menores)

//TODO: Cria um novo array com os valores menores do que 17 e incrementar eles em um
const menores2 = ages
      .filter(values => values < 17)
      .map(values => values + 1)
console.log('Menor que 17 incrementando:', menores2)      

//TODO: Retorne a soma de todos os valores menores do que 20
const soma = ages
      .filter(value => value < 20)
      .reduce((acc, next) => acc + next, 0)
console.log('Soma dos valores menores que 20:', soma)

//TODO: Incrementa em 1 o purchaseDaysAgo de todos objetos

let clientsAcc  = clients.map(v => ({...v}))
 clientsAcc = clientsAcc.map(value => {
  value.purchaseDaysAgo+=1
  return value;
})
console.log('Acrescentando um dia sem comprar:', clientsAcc)

//TODO: Verifica se um determinado número de entrada está contigo no array
console.log('ages.includes(19):', ages.includes(19))
console.log('ages.find(18):', ages.find(v => v === 18))
console.log('Pessoas nascida em 1986:', clients.includes(1986))
console.log('Pessoas nascida em 1986 com find:', clients.find(v => v === 1986))

//TODO: Altera array para ficar só com o primeiro nome dos clientes
const firstName = clients.map(value => value.name.split(" ")[0])
console.log('Primeiro nome dos clients:', firstName)


