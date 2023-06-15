//tratamento de erro em promise

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
            
        } catch (error) {
            //resolve para exibir a msg de erro
            //resolve(error)
            reject(error)
        }
    })
}

console.log(funcionarOuNao)

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esperado: ${err}`)
        )
    .then(() => console.log('Quase fim!')) 
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))

