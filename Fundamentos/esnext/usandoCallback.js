const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
        
    })

}
    
/* // exemplo simples exibindo retorno
let nomes = []
getTurma('A', alunos => {
    console.log(alunos)
})
*/
// conhecido como callback hell por estar um dentro do outro e isso compromete e nao e elegante
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        console.log(nomes)
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})
