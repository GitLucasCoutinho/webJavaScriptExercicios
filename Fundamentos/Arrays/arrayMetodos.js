const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos)

pilotos.pop() // massa quebrou o carro -- remove o ultimo elemento da lista
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.unshift('Hamilton') // inclui no inicio da lista  
console.log(pilotos)

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa') //primeiro indice `2` inclui apartir dele e o segundo (0) significa que nao removera nenhum
console.log(pilotos)

pilotos.splice(3,1) // massa saiu

const algunsPilotos1 = pilotos.splice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.splice(1,4) // montou um array com esse miolo sem incluir o indice 4
console.log(algunsPilotos1)


