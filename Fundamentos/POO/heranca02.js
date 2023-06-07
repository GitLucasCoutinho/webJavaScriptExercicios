// Cadeia de prototipos (prototype chain)

Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
/*
[Running] node "c:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\POO\heranca02.js"
0 A B C

*/



const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
            if (this.valAtual + delta <= this.velMax){
            this.velAtual += delta  
        }else {
            this.velAtual = this.velMax
        }
        
    },
    status(){
        return `${this.velAtual} Kmh de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F40'
    , velMax:324 //shadowing = sombrea o objeto com escopo mais abrangente prioriza esse ao atributo do pai 
}

const volvo = {
    modelo: 'V40'
    , status() {
        return `${this.modelo}: ${super.status()}`

    }
}


//Nesse momento se define a Herança (ferrari herda carro) por meio do metodo setPrototypeOf da classe Object
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.modelo,ferrari.status())

/*
[Running] node "c:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\POO\heranca02.js"
0 A B C
{ modelo: 'F40', velMax: 324 }
{ modelo: 'V40', status: [Function: status] }
V40: 200 Kmh de 200 Km/h
F40 324 Kmh de 324 Km/h
*/ 
