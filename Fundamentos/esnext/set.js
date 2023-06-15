//nao aceita repeticao e nao eh indexada

const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('palmeiras').add('Corinrhians')
times.add('Flamengo')
times.add('Vasco')


console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))
console.log(times.size)


const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)