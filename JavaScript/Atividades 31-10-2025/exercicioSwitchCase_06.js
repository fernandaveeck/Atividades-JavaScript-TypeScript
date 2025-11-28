//Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), 
//o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). 
//A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

import readline from 'readline-sync';

let novoSalario;

console.log(" ---  REAJUSTE SALARIAL  ---");
let nome = readline.question("Nome completo do colaborador:");
let salario = readline.questionFloat("Salario: ");

console.log(" --- CARGOS ---");
console.log("1 - Gerente\n2 - Vendedor\n3 - Supervisor\n4 - Motorista \n5 - Estoquista \n6 - Tecnico de T.I.");
let cargo = readline.questionInt("\nInforme o codigo do cargo: ");

switch(cargo){
    case 1:
        console.log(`\nColaborador: ${nome}\nCargo: Gerente - reajuste salarial 10%`);
        console.log("Novo salario:", novoSalario = salario + (salario * 0.10), 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(novoSalario));
        break;

    case 2:
        console.log(`\nColaborador: ${nome}\nCargo: Vendedor - reajuste salarial: 7%`);
        console.log("Novo salario:", novoSalario = salario + (salario * 0.07), 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(novoSalario));
        break;

    case 3:
        console.log(`\nColaborador: ${nome}\nCargo: Supervisor - reajuste salarial: 9%`);
        console.log("Novo salario:", novoSalario = salario + (salario * 0.09), 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(novoSalario));
        break;

    case 4:
        console.log(`\nColaborador: ${nome}\nCargo: Motorista - reajuste salarial: 6%`);
        console.log("Novo salario:", novoSalario = salario + (salario * 0.06), 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(novoSalario));
        break;

    case 5:
        console.log(`\nColaborador: ${nome}\nCargo: Estoquista - reajuste salarial: 5%`);
        console.log("Novo salario:", novoSalario = salario + (salario * 0.05), 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(novoSalario));
        break;

    case 6:
        console.log(`\nColaborador: ${nome}\nCargo: Tecnico de T.I. - reajuste salarial: 8%`);
        console.log("Novo salario:", novoSalario = salario + (salario * 0.08), 
        new Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(novoSalario));
        break;
    default:
        console.log("Informe um código válido.");
}