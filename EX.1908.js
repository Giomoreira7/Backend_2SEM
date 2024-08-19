// 1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const frase = " Apreciando cada passo, mas já sonhando com as próximas conquistas!!";
console.log(frase.length)
console.log(frase.toLocaleUpperCase())

// 2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

let cidade = null;
let estado;
console.log(cidade);
console.log(estado);

//3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

const maquiagem = 'Base';
const preço = 12.50;
const desconto = true;

console.log(`Preço da  ${maquiagem} é ${ preço } possui desconto? ${desconto}`);

//4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.