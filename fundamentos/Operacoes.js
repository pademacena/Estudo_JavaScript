// let a = 0
// let b = 0
// let soma = 0
// let subt = 0
// let mult = 0
// let divi = 0


let a, b, soma, subt, mult, divi

a = 5
b = 65

//operador de soma +
soma = a + b
console.log(soma)

//operador de subitracao -
subt = a - b
console.log(subt)

//operador de multiplicacao *
mult = a * b
console.log(mult)

//operador de divisao /
divi = a / b
console.log(divi)


opera = (a, b) => {
    soma = a + b
    console.log(soma)
    subt = a - b
    console.log(subt)
    mult = a * b
    console.log(mult)
    divi = a / b
    console.log(divi)
}
opera(10, 5)