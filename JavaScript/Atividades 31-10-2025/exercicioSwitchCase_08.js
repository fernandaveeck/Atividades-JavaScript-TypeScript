//Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária. O programa deverá 
//ler o tipo da operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) 
//e o valor a ser depositado ou sacado (somente nas opções 2 e 3). Considere que um saque só pode
//ser realizado caso haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela.
//A variável saldo (número real), será inicializada com o valor de R$ 1000.00. Caso o número da 
// operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!

import readline from 'readline-sync';

let saldo = 1000;
let operacao;

console.log(" -- CONTA BANCARIA --\nDigite o codigo da ação que deseja realizar:");
console.log("1 - Ver saldo\n2 - Saque\n3 - Depósito");
operacao = readline.questionFloat();

switch(operacao){
    case 1:
        console.log("Operação escolhida: 1 - Ver saldo\nSaldo:", saldo,
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(saldo));
    break;

    case 2:
        console.log("Operação escolhida: 2 - Saque");
        let saque = readline.questionFloat("Valor do saque: R$");
        if (saque <= saldo){
            saldo = saldo - saque;
            console.log("Novo saldo: ",  saldo,
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(saldo));
        }else{
            console.log("Saldo insuficiente!");
        }
    break;

    case 3:
        console.log("Operação escolhida: 3 - Depósito");
        let deposito = readline.questionFloat("Valor do deposito: R$");
            saldo = saldo + deposito;
            console.log("Novo saldo: ",  saldo,
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(saldo));
    break;

    default:
        console.log("Operacao invalida!");
   
}