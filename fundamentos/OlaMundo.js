// funcao normal
function greetMe(nome) {
    return ("Olá, " + nome)
  }
//chamandoa funcao e aplicando um valor
console.log(greetMe("mundo")) // "Olá, mundo"

// passando mensagem direto do console
console.log("Ola, mundo")

//Arrow function com o valor 
ola = () => "Ola, mundo"
console.log(ola())

//ola mundo retornado ao executar a funcao 
function greetMe2(nome) {
   console.log("Olá, " + nome)
  }
greetMe2("mundo")

//ArrowFunction com return
ola2 = () => {
    return("Ola, mundo")
}
console.log(ola2())