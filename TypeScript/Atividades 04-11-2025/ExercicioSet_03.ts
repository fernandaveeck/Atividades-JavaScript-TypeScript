//Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao 
//usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os 
//individualmente na Collection Set. Em seguida, faça o que se pede:
//Mostre na tela todos os elementos da Collection Set. 

import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>([]);

console.log("Digite 10 numeros: ");

for (let i = 0; i < 10; i++) {
    let numero = readlinesync.questionInt(`Numero ${i + 1}: `);
    numeros.add(numero);
}
let ordem = Array.from(numeros).sort((a, b) => a - b);
console.log("Numeros do Set ordenados: ");

for (let numeros of ordem) {
    console.log(numeros);
}
