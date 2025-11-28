//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre
//na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, 
//seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa.

import readline from 'readline-sync';

let contMenor21 = 0;
let contMaior50 = 0;
let idade = 1;

while (idade >= 0) {
    idade = readline.questionInt("Digite uma idade: ");
    if (idade > 0 && idade < 21) {
        contMenor21++
    } else if (idade > 50) {
        contMaior50++
    }
}
console.log(`Total de pessoas menores de 21 anos: ${contMenor21}\nTotal de pessoas maiores de 50 anos: ${contMaior50}`);