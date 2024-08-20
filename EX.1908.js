// 1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
console.log ('1)')
const frase = " Apreciando cada passo, mas já sonhando com as próximas conquistas!!";
console.log(frase.length)
console.log(frase.toLocaleUpperCase())

// 2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
console.log ('2)')
let cidade = null;
let estado;
console.log(cidade);
console.log(estado);

//3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
console.log ('3)')
const maquiagem = 'Base';
const preço = 12.50;
const desconto = true;

console.log(`Preço da  ${maquiagem} é ${ preço } possui desconto? ${desconto}`);

//4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
console.log ('4)')
const numero1 = 47;
const numero2 = "89";
const converterNumero = Number(numero2);const converterNumero2 = String(numero1);
console.log(converterNumero);console.log(converterNumero2);


//5.Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
console.log ('5)')
const modifica = " Giovanna Linda"
console.log(modifica.toUpperCase())
console.log(modifica.toLowerCase())
console.log(modifica.slice(9,))

// 6) Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operação, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
console.log ('6)')
console.log 
const saldo = 20;
const deposito = 50;
const saque = 60;

let operacao = (saldo + deposito) - saque
console.log (`Saldo final : ${operacao}`);

//7) Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
console.log ('7)')
let numero = 60;
let resultado = (numero % 2 === 0) ? "par" : "ímpar";
console.log(`O numero ${numero} é ${resultado}`);

//8) Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
console.log ('8)')
let Login = true;
let adm = true;


if (Login && adm) {
    console.log("O usuário está logado!");
} else {
    console.log("O usuário não está logado ou não possui permissão para acessar!");
}

//9) Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
console.log ('9)')
const B1 = true;
const B2 = false;

if (B1 || B2) {
    console.log("Uma dessas é verdadeira.")
} else {
    console.log("Falsas.")
}

//10) Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
console.log ('10)')
const idadeDoUs = 19;
const idadeMinima = 18;

if (idadeDoUs >= idadeMinima) {
    console.log("Autorizado a  compra  de ingressos")    
} else {
    console.log("É necessário alguém maior de idade para comprar o ingresso.")
}

// 11) Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
console.log ('12)')
console.log ( " Atividade de BackEnd")
const saudacao = function (nome){
    return `Olá ${nome}`
}
console.log (saudacao('Prof Tati'));

// 12) Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

console.log ('12)')
const maiorDeIdade = function (idade){
    if (idade >= 19){
        return `Menor de idade`;
    } else {
        return `Maior de idade`;
    }
}
console.log (maiorDeIdade(18));

// 13) Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
console.log ('13)')
const palavra = function (palavra){
    if (palavra.split("").reduce((acc, char) => char + acc, "") === palavra){
        return `É um palíndromo`;
    } else {
        return `Não é um palíndromo`;
    }
}
console.log (palavra('anilina'));

//  14) Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
console.log ('14)')
const numeros = function (n1,n2,n3){
    if (n1 > n2 && n1 >n3){
        return `Maior número é: ${n1}`;
    } else if (n2 > n1 && n2 >n3) {
        return `Maior número é: ${n2}`;
    } else {
        return `Maior número é: ${n3}`;
    }
}
console.log (numeros(2,9,8));

// 15) Crie uma function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado

console.log ('15)')
const calcularPotencia =  (base,expoente) => {
    const resultado = base ** expoente
    return ` ${resultado}` 
}
console.log (calcularPotencia (90,5));