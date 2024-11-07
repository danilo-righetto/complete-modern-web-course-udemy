/* Variaveis e Constantes */
var a = 3; // neste caso o valor pode ser alterado quantas vezes forem necessárias e a variavel pode ser re-declarada
let b = 4; // neste caso o valor pode ser alterado quantas vezes forem necessárias e a variavel não pode ser re-declarada
const c = 5; // neste caso o valor não pode ser alterado e a não variavel pode ser re-declarada e nem alterada após a declaração

/* Tipagem */
/* No Javascript a linguagem é fracamente tipada */
let test = 'rodando';
console.log(test);
console.log(typeof test); // string

test = 3.151698574;
console.log(test);
console.log(typeof test); // double