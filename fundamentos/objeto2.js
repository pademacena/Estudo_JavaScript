/*
criação de objeto no js é a partir de função
*/


console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

//Criar objetos a partir de classe (utilizado muito em java)
class Produto {} 
console.log(typeof Produto)
console.log(typeof new Produto())