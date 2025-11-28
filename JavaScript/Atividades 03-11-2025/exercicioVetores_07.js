//Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo 
//que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve 
//exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: 
//“Não foi encontrado!” deve ser exibida na tela.

import readline from 'readline-sync';

const numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let posicao = -1;
let pesquisa = readline.questionInt("Digite o numero que voce deseja encontrar: ");

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === pesquisa) {
        posicao = i;
        break;
    }
}
if (posicao !== -1) {
    console.log(`O numero ${pesquisa} esta localizado na posicao ${posicao}.`);
} else {
    console.log(`O numero ${pesquisa} nao foi encontrado!`);
}

