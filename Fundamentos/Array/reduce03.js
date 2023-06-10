Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = this[0]
    for (let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this [i], i, this)
    }
    return acumulador
}


const soma =(total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))

//propria implementacao de reduce
/*
[Running] node "c:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\array\reduce03.js"
22

*/