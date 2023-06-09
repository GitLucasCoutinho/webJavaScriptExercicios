console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)


aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4])



aprovados[3] = 'Lucas'
aprovados.push('Ana') // Inclui no fim da lista
console.log(aprovados.length)

aprovados[9] ='Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados) 
aprovados.sort() //ordedna 
console.log(aprovados) 
aprovados = ['Bia', 'Carlos', 'Ana'] 
console.log(aprovados) 

aprovados = ['Bia', 'Carlos', 'Ana'] 
aprovados.splice(1,0,'Elemento01', 'Elemento02') // excluir e adicionar a partir do indice --- exclui a partir do intervalo entre os dois primeiros parametros
console.log(aprovados) 
