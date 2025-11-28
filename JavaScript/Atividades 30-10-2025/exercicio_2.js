import readline from 'readline-sync';

let nome;
let nota1;
let nota2;
let nota3;
let nota4;
let media;

nome=readline.question("Digite o nome completo do participante: ");
nota1=readline.questionFloat("Digite a nota1:");
nota2=readline.questionFloat("Digite a nota2:");
nota3=readline.questionFloat("Digite a nota3:");
nota4=readline.questionFloat("Digite a nota4:");
media = (nota1+nota2+nota3+nota4)/4;

console.log(`Média de ${nome}: ${media.toFixed(1)}`);