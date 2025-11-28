//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
//Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. 

import readline from 'readline-sync';

let numeros;
let soma = 0;
do{
    numeros = readline.questionInt("Digite um numero inteiro: ");
    if (numeros > 0){
        soma = numeros + soma;       
    }
}while(numeros != 0);
console.log("A soma dos numeros positivos é: ", soma);