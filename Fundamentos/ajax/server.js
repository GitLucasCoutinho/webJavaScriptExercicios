
//esse bodyParser eh responsavel por interpretar os dados vindos
// do request para serem manipulados no arquivo server.js
const bodyParser = require('body-parser')
const express = require('express')
//instanciar o exprees 
const app = express()

//dentro da pasta atual no qual o arquivo server.js esta sirva/prove os arquivos estaticos (.html.js.font.css) 
app.use(express.static('.'))

//qualquer requisicao que chegar com /teste seria tratado por este midleware
//app.use('/teste', bodyParser.urlencoded({ extended : true}))


//esse aqui vai ser aplicado para qualquer requisicao que 
//chegar no servidor sera tratado pelo urlencoded vindo
// do bodyParser por este middleware
app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())


//quando vier uma requisicao do tipo get na url /teste chame a funcao que retornara um "OK"
app.get('/teste', (req, res) => res.send('ok'))
app.listen(8080, () => console.log('Executando...'))


//inicie o servidor executando o seguinte comando
//npm start