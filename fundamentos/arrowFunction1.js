let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}


dobro = a => 2 * a //return esta inplicito


console.log(dobro(Math.PI))

let ola = function () {
    return 'Ola'
}

ola = () => 'Ola'
console.log(ola())