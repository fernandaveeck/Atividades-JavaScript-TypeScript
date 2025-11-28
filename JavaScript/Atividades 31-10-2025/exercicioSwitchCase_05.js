//Com base na tabela abaixo, escreva um algoritmo que leia o código de 
//um item (número inteiro entre 1 e 6) e a quantidade comprada deste item(número inteiro).
//A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

import readline from 'readline-sync';

let pedido;
let total;
let quantidade;

console.log("   >>>>>     MENU     <<<<<   ");
console.log("\n1 - Cachorro Quente  R$10,00");
console.log("2 - X-Salada         R$15,00");
console.log("3 - X-Bacon          R$18,00");
console.log("4 - Bauru            R$12,00");
console.log("5 - Refrigerante     R$8,00");
console.log("6 - Suco de Laranja  R$13,00");

pedido = readline.questionInt("\nDigite o codigo do item desejado: ")
switch(pedido){
    case 1:
        quantidade = readline.questionInt("Informe a quantidade desejada: ");
        console.log(`Produto: Cachorro Quente \nQuantidade: ${quantidade}`);
        total = quantidade * 10;
        console.log("Valor total: ", total, 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(total));
        break;
    
        case 2:
        quantidade = readline.questionInt("Informe a quantidade desejada: ");
        console.log(`Produto: X-Salada \nQuantidade: ${quantidade}`);
        total = quantidade * 15;
        console.log("Valor total: ", total, 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(total));
        break;

        case 3:
        quantidade = readline.questionInt("Informe a quantidade desejada: ");
        console.log(`Produto: X-Bacon \nQuantidade: ${quantidade}`);
        total = quantidade * 18;
        console.log("Valor total: ", total, 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(total));
        break;

        case 4:
        quantidade = readline.questionInt("Informe a quantidade desejada: ");
        console.log(`Produto: Bauru \nQuantidade: ${quantidade}`);
        total = quantidade * 12;
        console.log("Valor total: ", total, 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(total));
        break;

        case 5:
        quantidade = readline.questionInt("Informe a quantidade desejada: ");
        console.log(`Produto: Refrigerante \nQuantidade: ${quantidade}`);
        total = quantidade * 8;
        console.log("Valor total: ", total, 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(total));
        break;

        case 6:
        quantidade = readline.questionInt("Informe a quantidade desejada: ");
        console.log(`Produto: Suco de Laranja \nQuantidade: ${quantidade}`);
        total = quantidade * 13;
        console.log("Valor total: ", total, 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(total));
        break;
        
        default:
            console.log("Digite uma opção válida.");

}