import readline from 'readline-sync';

let salario;
let abono;
let novosalario;

salario=readline.questionFloat("Digite seu salário: R$");
abono=readline.questionFloat("Digite o abono: R$");
novosalario=salario+abono;
console.log("Novo salário: ",
new Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(novosalario));
