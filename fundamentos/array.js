//criando um array

let frutas = [
    'banana',
    'uva'
]
console.log(frutas)

//ver espacos utilizados pelo array
console.log(frutas.length)

//acessar index de um array
console.log(frutas[0])

//realizando loop em um array
frutas.forEach(function(item,index, array) {
    console.log(item, index)
})

//adicionando algo no final de um array
frutas.push('Laranja')
console.log(frutas)

// remover algo do final de um array
frutas.pop()
console.log(frutas)

//remover algo do inicio de um array
frutas.shift()
console.log(frutas)

//adicionar algo no inicio de um array
frutas.unshift('Maca')
console.log(frutas)

//descobrir o index de um item no array
console.log(frutas.indexOf('uva'))

//remover algo pelo index
frutas.splice(frutas.indexOf('uva'), 1)
console.log(frutas)
//ou 
frutas.unshift('uva')
frutas.splice(1)
console.log(frutas)

//remover mais de um item pelo index
let color =[
    'azul',
    'amarelo',
    'roxo',
    'lilaz',
]

console.log(color)

let a = 1, b = 2
let rmColor = color.splice(a, b)
console.log("cores que sobraram: " + color)
console.log("cores removidas: " + rmColor)

//copiar um array
let cpArray = color.slice()
console.log(cpArray)