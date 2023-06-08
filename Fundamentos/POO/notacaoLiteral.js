const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = {a,b,c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3,'obj3')

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4, 'obj4')

const obj5 = {
    funcao1: function(){
    
    },

    function2 () {

    }
}

console.log(obj5)
 /*
  
 [Running] node "c:\Projetos\CWM\POO\notacaoLiteral.js"
{ a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }
{ nota: 7.87 } obj3
{ nota: 7.87 } obj4
{ funcao1: [Function: funcao1], function2: [Function: function2] }
 */