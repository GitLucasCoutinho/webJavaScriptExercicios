const express = require('express')
const app = express()
//Uma vez que eu submeto os dados ddo formulario ele vai pegar os input do corpo da requisicao eincluir no request.body
const bodyParser = require('body-parser')

//urlencoded eh o padrao 
app.use(bodyParser.urlencoded({ extended: true}))


//vai atender uma requisicao do tipo post no caso o /usuarios
app.post('/usuarios', (req, resp) => { 
    console.log(req.body)
    resp.send('<h1>Parabens</h1>')
})

app.listen(3003)