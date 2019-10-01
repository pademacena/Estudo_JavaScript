//Area Circulo
let raio, ar

raio = 12

area = (raio) => {
    ar = (raio * raio) * Math.PI
    return (ar.toFixed(2))
    //o toFixed() declara quantas casa decimais eu quero no resultado que ira retornar
}
console.log(area(raio))

//area quadrado
let lado, arQ

lado = 10 

areaQ = (lado) => {
    arQ = (lado * lado)
    return arQ
}
console.log(areaQ(lado))

//Area triangulo
let arT, base, h

base = 3
h = 6

areaT = (base, h) => {
    arT = (base * h) / 2
    return (arT.toFixed(2))
}
console.log(areaT(base, h))

//area retangulo 
let baseR, alturaR, arR

baseR = 18
alturaR = 35

areaR = (baseR, alturaR) => {
    //utilização do calculo dentro do return 
    return (arR = baseR * alturaR)
}
console.log(areaR(baseR, alturaR))
