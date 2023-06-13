require('./global')
console.log(MinhaApp.saudacao())


//nao vai conseguir muadr o nome porque foi utilizadod o Object.freeze
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)