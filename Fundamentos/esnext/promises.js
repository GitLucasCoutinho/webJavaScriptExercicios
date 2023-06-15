// a promessa foi cumprida ou nao retornando sucesso ou erro 
// tem como objetivo atender uma requisicao assincrona

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}
falarDepoisDe(3, 'Que legal!01')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))


//com mais de um parametro ele sera ignoraddo
function falarDepoisDe02(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase, 'abc')
        }, segundos * 1000)
    })
}

//tratando erro utilizando reject e nao resolve



    function falarDepoisDe03(segundos, frase){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(frase)
            }, segundos * 1000)
        })
    }

    falarDepoisDe03(3, 'Que legal!03')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))