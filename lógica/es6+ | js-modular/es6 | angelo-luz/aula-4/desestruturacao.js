const valores = [4,1,2,3,4,5]

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

// Desestruturação

// TODO: Função que recebe um cliente e retorna apena CPF e telefone e cidade
const {cpf, telefone, endereco:{cidade} } = client
console.log(`Dados do cliente:\n 
  CPF: ${cpf}\n
  Telefone: ${telefone}\n 
  Cidade: ${cidade}`)

const x = ({cpf, telefone, endereco:{cidade}}) => {
  console.log(`Dados do cliente:\n 
    CPF: ${cpf}\n
    Telefone: ${telefone}\n 
    Cidade: ${cidade}`)
}  
x(client)

// TODO: Pega o primeiro (e o terceiro) elemento do array de 
const [n1, , n2] = valores
console.log('Primeiro e terceiro valor do array:', n1, n3)
