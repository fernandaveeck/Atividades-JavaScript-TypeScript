import readline from 'readline-sync';

let s_bruto;
let ad_noturno;
let hora_extra;
let descontos;
let s_liquido;

s_bruto=readline.questionFloat("Digite seu salário bruto: R$");
ad_noturno=readline.questionFloat("Digite o adicional noturno: R$");
hora_extra=readline.questionFloat("Digite suas horas extras: ");
descontos=readline.questionFloat("Digite o valor do desconto: R$");
s_liquido = s_bruto+ad_noturno+(hora_extra*5)-descontos;

console.log("Salário líquido: ", 
new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(s_liquido));