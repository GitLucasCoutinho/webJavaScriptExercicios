//Object.preventExtentions
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Executavel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal // serve para selar e garantir a seguranca para manter o objeto um pouco mais estatico
const pessoa = { nome:  'Juliana', idadde: 35 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa)) 