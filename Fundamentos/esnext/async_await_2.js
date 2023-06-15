function gerarNumerosEntre(min, max, numerosproibidos) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator ) + min
            //console.log(fator)
            if(numerosproibidos.includes(aleatorio)){
                reject('Numeros repetido!')
            }else {

                resolve(aleatorio)
            }
        })
    })
}

async function gerarMegaSena(qtdeNumetos, tentativas = 1) {
   
   try {
       const numeros = []
       for( let _ of Array(qtdeNumetos).fill()){
           numeros.push(await gerarNumerosEntre(1, 60, numeros))
       } 
       return numeros
   } catch (error) {
    if (tentativas > 100) {
        throw "nao deu certo!!!"
    }else{
        return gerarMegaSena(qtdeNumetos, tentativas + 1)
    }
   }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)

/*
gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)

*/