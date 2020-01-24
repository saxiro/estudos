const arr = [1, 3, 4, 5, 6];
const newArr = arr.map(item => item * 2);
console.log(newArr);
const usuario = {
  nome: 'Saxiro',
  idade: 37,
  endereco: {
    cidade: 'Vila Velha',
    estado: "ES"
  }
};
const {
  nome,
  idade,
  endereco: {
    cidade
  }
} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade); //REST

const user = {
  name: 'Fabricio',
  age: 37,
  empresa: 'Pag24horas'
};
const {
  name,
  ...resto
} = user;
console.log(name);
console.log(resto);
