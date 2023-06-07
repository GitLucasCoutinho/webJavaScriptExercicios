
const pai = { nome: 'Pedro', corCabelo:'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)


const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
    //writable nao podera ser alterado, podera ser listado
})


console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
console.log(Object.keys(filha1))
console.log(Object.assign(filha1))
console.log(Object.keys(filha2))
console.log(Object.assign(filha2))


//consultar se veio por heranca pelo .hasOwnProperty ----- pertence
for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`por herança: ${key}`)
}