function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('Vishhh')
        }, tempo)
    })
}
/*
esperarPor(2000)
    .then(() => console.log('Executando promisse 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 3...'))
    .then(esperarPor)
    .then(() => console.log('Executando promisse 4...'))
*/


// sempre que uma funcao retorna promise posso usar um await
/*
async function executar() {
    await esperarPor(2000)
    }
executar()

*/

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


async function retornarValorRapido() {
    return 20
}

async function executar() {
    let valorR = await retornarValorRapido()
    let valor = await retornarValor()
    //parece um codigfo sincrono mas e asincrono
    //neste caso o await pega o valor de resposta sem precisar do metodo .then 
    await esperarPor(1500)
    console.log(`Async/Await ${valor} `)
    console.log(`Async/Await ${retornarValorRapido} `)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1} `)
    console.log(`Async/Await ${retornarValorRapido} `)
    
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2 } `)
    console.log(`Async/Await ${retornarValorRapido} `)
}

    executar()


    //asincrono  pode acessar pelo await sincrono deve acessar pelo .then