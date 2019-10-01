//par nome/valor
const saudacao = 'opa'; //contexto lexico 1

function exec() {
    const saudacao = 'Falaaa'; // contexto lexico 2
    return saudacao
    //como estao em contexto diferentes nao vai dar conflito
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua bla bla bla ',
        numero: 123,
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
//printar mais de uma informacao pegando dentro de um objeto
console.log(cliente.nome + " idade " + cliente.idade)