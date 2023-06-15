let a = 1
console.log(a)
//retorna um valor
let p = new Promise(function (cumprirPromessa){
    cumprirPromessa(3)
})

p.then(function(valor){
    console.log(valor)
})


console.log(typeof Promise)


//retorna um objeto

let pO = new Promise(function (cumprirPromessa){
    cumprirPromessa({
        x: 3,
        y:4
    })
})

pO.then(function(valor){
    console.log(valor)
})

//retorna uma lista PL 

let pL = new Promise(function (cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

pL.then(function(valor){
    console.log(valor)
})

//utilizando arrow function para o console acima nitidamente mais simplificado 
pL.then(valor => console.log(valor))

//varios .then sendo que o resultado de um metodo then passa para o proximo tendo uma sequencia de operacoes baseado em funcoes
pL
  .then(valor => valor[0])
  .then(primeiro => primeiro[0])
  .then(letra => letra.toLowerCase())
  .then(letraMinuscula => console.log(letraMinuscula))


  // como no exemplo acima mas com funcoes nos retornos do then 

  let pL2 = new Promise(function (cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})


// em arrow function 
// const primeiraLetra = (string) => string[0]
function primeiraLetra(string) {
    return string[0]
}
// em arrow function 
// const primeiraLetra = (array) => array[0]
function primeiroElemento(array) {
    return array[0]
}

const convertaMinuscula = letra => letra.toLowerCase()

 pL2
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(convertaMinuscula)
    .then(console.log)