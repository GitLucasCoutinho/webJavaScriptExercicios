// usanddo a notacao literal
const obj1 = {}
console.log(obj1)

// Obejct em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funcoes contrutoras
function Produto(nome, preco, desconto) {
    this.nome = nome
}


// Funcao Fectory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome
        ,salarioBase
        ,faltas
        ,getSalario(){
            return(salarioBase / 30) * (30 - faltas)            
        }
    }
}


const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma funcao famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')

console.log(fromJSON)






