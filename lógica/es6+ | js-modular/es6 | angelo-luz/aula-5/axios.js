import axios from "axios";


// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class Api {
  static async getAddress(cep) {
    const response = new Address((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data);
    return response
  }
}

class Address {
  constructor({cep, logradouro, bairro, localidade}) {
    this.cep = cep
    this.logradouro = logradouro
    this.bairro = bairro
    this.localidade = localidade
  }
}

Api.getAddress('03371006').then(v => {console.log(v)})
