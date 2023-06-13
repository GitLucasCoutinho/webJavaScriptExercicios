console.log(this === global) // falso - this nao aponta para global e sim para module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('dentro de uma funcao...')
    //this dentro da funcao nao aponta para exportes
    console.log(this === exports)
    console.log(this === module.exports)
    //dentro de uma funcao aponta para global 
    console.log(this === global)

    //aponta para global
    this.perigo = '...'
    
}
//aponta para module.exportes o tornando publico 
this.perigo = '...'



logThis()