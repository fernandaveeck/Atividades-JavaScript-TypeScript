//Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números
//são pares e quantos número são ímpares

import readline from 'readline-sync';

let numeros;
let contPares = 0;
let contImpares = 0;

console.log("Digite 10 numeros: ")
for (let i = 0; i < 10; i++) {
    numeros = readline.questionInt(`${i + 1} - `);
    if (numeros % 2 == 0) {
        contPares++;
    } else {
        contImpares++;
    }
}
console.log(`Total de numeros pares: ${contPares}`);
console.log(`Total de numeros impares: ${contImpares}`);