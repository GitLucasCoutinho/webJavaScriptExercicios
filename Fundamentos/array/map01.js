const nums = [1, 2, 3, 4, 5]

//For composto
let resultado = nums.map(function(e) {
    return e * 2

})

console.log(resultado)
console.log(resultado, nums)

const soma10 = e => e + 10

const triplo = e => e * 3

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`


resultado= nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)



/*
[Running] node "c:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\array\map01,js"
[ 2, 4, 6, 8, 10 ]
[ 2, 4, 6, 8, 10 ] [ 1, 2, 3, 4, 5 ]
[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
*/