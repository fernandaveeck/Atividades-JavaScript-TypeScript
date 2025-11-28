//Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 
//69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que 
//leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez 
//outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, 
//mostre na tela se o doador está Apto ou Não Apto para doar sangue. 

import readline from 'readline-sync';

let nome = readline.question(" -- CRITERIO PARA DOAÇÃO DE SANGUE --\nDigite o nome completo do doador: ");
let idade = readline.questionInt("Digite a idade do doador: ");
let primeiraDoacao = readline.question("Primeira doação de sangue? Digite S para Sim ou N para Não: ").toLowerCase();

if(idade >= 18 && idade < 60){
    console.log(`${nome} está apto(a) a doar sangue!`);
}else if (idade >=60 && idade <=69 && primeiraDoacao == 'n'){
    console.log(`${nome} está apto(a) a doar sangue!`);
}else{
    console.log(`${nome} não está apto(a) a doar sangue.`);
}