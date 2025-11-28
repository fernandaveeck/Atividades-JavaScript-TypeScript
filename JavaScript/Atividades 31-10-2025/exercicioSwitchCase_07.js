//Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. 
//O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código 
//da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da 
//operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, 
//mostre a mensagem na tela Operação Inválida!

import readline from 'readline-sync';

let operacao;
let numero1 = readline.questionFloat("Digite dois numeros para o calculo:\nPrimeiro numero: ");
let numero2= readline.questionFloat("Segundo numero: ");
console.log(" -- INFORME O NUMERO DA OPERACAO DESEJADA --");
console.log("1 - Soma\t\t3 - Multiplicacao\n2 - Subtracao\t\t4 - Divisao");
operacao = readline.questionFloat();

switch(operacao){
    case 1:
        console.log(`${numero1} + ${numero2} = ${(numero1 + numero2)}`);
    break;

    case 2:
        console.log(`${numero1} - ${numero2} = ${(numero1 - numero2)}`);
    break;

    case 3:
        console.log(`${numero1} x ${numero2} = ${(numero1 * numero2)}`);
    break;

    case 4:
        console.log(`${numero1} / ${numero2} = ${(numero1 / numero2)}`);
    break;

    default:
        console.log("Por favor, digite uma operação válida.");
    
}

