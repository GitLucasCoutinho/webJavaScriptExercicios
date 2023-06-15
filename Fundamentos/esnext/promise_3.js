function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator ) + min
        console.log(fator)
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 30).then(console.log)

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O numero gerado foi ${numX10}`)
    .then(console.log)