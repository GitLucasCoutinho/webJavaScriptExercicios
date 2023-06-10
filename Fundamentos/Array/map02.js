const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }'
    ,'{ "nome": "Caderno", "preco": 13.19 }'
    ,'{ "nome": "Kit de Lapis", "preco": 41.22 }'
    ,'{ "nome": "Caneta", "preco": 7.5 }'
]

// Retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

/*
[Running] node "c:\Users\windev\Documents\GitHub\webJavaScriptExercicios\Fundamentos\array\map02.js"
[ 3.45, 13.19, 41.22, 7.5 ]
*/