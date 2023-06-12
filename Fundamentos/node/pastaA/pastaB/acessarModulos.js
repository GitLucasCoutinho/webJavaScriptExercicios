//const saudacao = require('saudacao')
const moduloA = require('../../moduloA.js')

console.log(moduloA.ola)

const saudacao = require('saudacao')

console.log(saudacao.ola)


//por padrao o node busca pelo arquivo index 
//const c = require('./pastaC/index')
const c = require('./pastaC')
console.log(c.ola2)



//criando um servidor web ouvindo a porta 8080
/*
const http = require('http') //caminho interno do node nao precisa referenciar o camibnho do modulo
http.createServer((req, res) => {
res.write('Bom dia')
res.end()
}).listen(8080)
*/
