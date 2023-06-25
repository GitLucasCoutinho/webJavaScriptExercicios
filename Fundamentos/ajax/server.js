
//esse bodyParser eh responsavel por interpretar os dados vindos
// do request para serem manipulados no arquivo server.js
const bodyParser = require('body-parser')
const express = require('express')
//instanciar o exprees 
const app = express()

//dentro da pasta atual no qual o arquivo server.js esta sirva/prove os arquivos estaticos (.html.js.font.css) 
app.use(express.static('.'))

//qualquer requisicao que chegar com /teste seria tratado por este midleware
//app.use('/teste', bodyParser.urlencucasloutinhocoded({ extended : true}))


//esse aqui vai ser aplicado para qualquer requisicao que 
//chegar no servidor sera tratado pelo urlencoded vindo
// do bodyParser por este middleware
app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())

const multer = require('multer')


// para salvar o arquivo estamos abaixo criando uma pasta e renomeando o arquivo com o prefixo da data para nao sobrescrever o arquivo ja existente
const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null,'./upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

//o objeto storage criado acima contem o arquivo vindo da requisicao para a const upload receber 
const upload = multer({ storage }).single('arquivo')

    app.post('/upload', (req, res) => {
        upload(req, res, err => {
            if (err) {
                return res.end('Ocorreu um erro.')
            }
            res.end('Concluido com sucesso.')
        })
    })


        //neste caso precisa do boryparser para interpretar os dados recebidos da requisicao do front 
    app.post('/formulario', (req, res) =>  {
        res.send({
            ...req.body,
            id: 1
        })
    })
        

app.get('/parOuImpar', (req, res) => {

    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0 
        res.send({
            resultado: par ? 'par' : 'impar'
        })

})



//quando vier uma requisicao do tipo get na url /teste chame a funcao que retornara um "OK"
app.get('/teste', (req, res) => res.send('ok'))
app.get('/dataatual', (req, res) => res.send(new Date))
app.listen(8080, () => console.log('Executando...'))


//inicie o servidor executando o seguinte comando
//npm start