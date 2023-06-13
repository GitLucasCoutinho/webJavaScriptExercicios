const fs = require('fs') // file sistem, interno do Node


// __ dois underscore/underline eh uma constante que esta presente em todos os arquivos/ modulos do node  que retorna um diretorio '__dirname'
const caminho = __dirname + '/arquivo.json'

//sincrono -- le o arquivo completamente para depois liberar o processamento
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono envia um callback que retona quando termina

fs.readFile(caminho,'utf-8', (err, conteudo) => {
    //converte para json e desta forma conseguimos 
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//desta forma nao precisa utilisar o .parse 
const config = require('./arquivo.json') // executa de forma sincrona e carrega o objeto por tanto executa antes da resposta do exemplo assincrono acima
console.log(config.db.host)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})