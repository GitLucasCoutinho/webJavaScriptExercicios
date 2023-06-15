const tecnologias = new Map()
    tecnologias.set('react', { framework: false })
    tecnologias.set('angular', { framework: true })

    console.log(tecnologias.react)// desta forma retorna uindefined
    console.log(tecnologias.get('react'))// desta forma retorna o valor 

    const chavesVariadas = new Map([
        [function () {}, 'Function'],
        [{}, 'Objetivo'],
        [123, 'Numero']
    ])

    chavesVariadas.forEach((vl, ch) => {
        console.log(ch, vl)  
    })

    console.log(chavesVariadas.has(123))
    chavesVariadas.delete(123)
    console.log(chavesVariadas.has(123))

    console.log(chavesVariadas.size)
    
    
    chavesVariadas.set(123, 'a')
    chavesVariadas.set(123, 'b')
    console.log(chavesVariadas.size) // chave nao aceita repeticao