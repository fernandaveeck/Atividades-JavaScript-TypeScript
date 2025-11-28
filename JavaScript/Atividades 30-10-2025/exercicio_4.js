import readline from 'readline-sync';

let n1;
let n2;
let n3;
let n4;
let diferenca;

n1=readline.questionFloat("Digite 4(quatro) números: \nPrimeiro número: ");
n2=readline.questionFloat("Segundo número: ");
n3=readline.questionFloat("Terceiro número: ");
n4=readline.questionFloat("Quarto número: ");
diferenca=(n1*n2) - (n3*n4);

console.log(`Diferença do produto entre ${n1} e ${n2} pelo produto de ${n3} e ${n4}: ${diferenca}`);