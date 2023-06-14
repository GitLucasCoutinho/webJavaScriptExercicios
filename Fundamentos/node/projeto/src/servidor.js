//teste para executar o que esta sendo executado node src/servidor.js no terminal 
//npm i --save body-parser
// node start

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

/*/
app.get('/produtos', (req, res, next) => {
    console.log('Middlewere 1...')
    next()
})

//mocado
app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45})
})

app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`)
})
*/

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
       // id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    }) 
    res.send(produto) //no final das contas aqui vai converter para JSON 
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //no final das contas aqui vai converter para JSON 
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto) //no final das contas aqui vai converter para JSON 
})
    

app.listen(porta, () => {
    console.log(`servidor esta executando na porta ${porta}.`)
})


