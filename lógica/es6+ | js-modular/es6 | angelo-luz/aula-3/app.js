const valores = [4,1,2,3,4,5]
const valores2 = [8,7,9,12]

const client = {
    nome: 'Gustavo Rabelo',
    cpf: '266.234.232-02',
    nascimento: '23/11/2003',
    telefone: '22134476',
    endereco: {
      rua: 'Rua Fábio,360',
      cidade: 'São Paulo',
      estado: 'SP',
      país: 'Brasil'
    }
}

// REST e SPREAD
// TODO: Pegar nome do cliente mas não descartar 
const {nome, ...rest} = client
console.log('nome:', nome)
console.log('Restante do array:', rest)

// TODO: Função que soma N valores
const sum = (...valores) => {
  return valores.reduce((acc, next) => acc + next)
} 
console.log('Resultado da soma:', sum(4,5,4))

// TODO: Concatenando arrays
const arr = [...valores, ...valores2]
console.log('Array concatenado:', arr)

// TODO: Adiciona elemento no início de array
const arr2 = [100,...valores]
console.log('Adicionando o 100 no início:', arr2)

// TODO: Função que recebe um array de valores, multiplica o primeiro por todos os outros
const x = ([primeiro, ...resto]) => {
     return resto.map(v => v * primeiro)
}
console.log('Multiplicando pelo primeiro item do array:', x(valores))

// TODO: Adiciona novo atributo no objeto cliente: updateAt
const cli = {...client, updateAt: new Date()}
console.log('Adicionando novo atributo:', cli)

// TODO: Altera o telefone do cliente para '11111111'
const cli2 = {...client, telefone: '11111111'}
console.log('Alterando o telefone:', cli2)
