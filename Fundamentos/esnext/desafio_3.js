
//FS -> file sistem
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivos(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

//const caminho = path.join(__dirname, 'dados.txt')
/*
lerArquivos(caminho)
    .then(conteudo => console.log(conteudo))
*/

console.log('separando')

lerArquivos(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    //.then(linhas => console.log(linhas[1]))
    .then(linhas => linhas.join(','))
    .then(console.log)


