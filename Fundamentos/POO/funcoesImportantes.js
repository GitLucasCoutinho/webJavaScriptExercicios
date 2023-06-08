const pessoa = {
    nome: 'Rebeca',
    idade: 2, 
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


//exemplo destruct 

Object.entries(pessoa).forEach((e) => {
    console.log(`${e[0]}: ${e[1]}`)   
})


//exemplo destruct (desestruturacao)organizado 
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)   
})


Object.defineProperty(pessoa,'dataDeNascimento', {
 enumerable: false // mascara o atributo do objeto quando chamado pelo Object.keys ~por exemplo~
 ,writable: false
 ,value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object.assing (ECMAScript 2015)
const dest = { a : 1 }
const o1 = {b: 2}
const o2 = {b: 3}
const obj = Object.assign(dest,o1, o2)

console.log(Object.keys(obj))

Object.freeze(obj)
obj = 1234
console.log(obj)


