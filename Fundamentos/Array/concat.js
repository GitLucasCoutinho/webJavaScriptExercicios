const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))

/*
[Running] node "c:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\array\concat.js"
[ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ] [ 'Ualeskah', 'Cibalena' ] [ 'Uoxiton', 'Uesclei' ]
[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
*/