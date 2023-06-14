// operador ... rest(juntar)/spread(espalhar)
//usar rest com parametros de funcao 

// usar spread com objetivo
const funcionario = { nome: 'Maria', salario: 12345.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array 
const grupoA = ['Joao', 'Pedro', 'Rafael']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)

