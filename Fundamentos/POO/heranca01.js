

/*
* Heranca em JavaScript eh baseada em prototipo

* "prototype" eh uma funcao da classe "Object".

* [[prototype]] eh diferente do exemplo a cima, porque desta forma conseguimos definir
 a classe "pai" e assim herdar seus atributos e funções. 

* " __proto__ "a partir disso eu consigo acessar o prototipo (objeto pai) 

*/


const ferrari = {
    modelo: 'F40'
    , velMax:324
}

const volvo = {
    modelo:'V40'
    , velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ == null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

// exemplo da proxima aula 

Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

/*

[Running] node "c:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\POO\heranca02.js"
0 A B C

*/