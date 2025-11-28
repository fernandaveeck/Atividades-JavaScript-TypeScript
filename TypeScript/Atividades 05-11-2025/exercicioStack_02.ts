//Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para
//organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que 
//aceitará as opções 0, 1, 2 e 3:
//1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
//2: Listar todos os livros da Pilha
//3: Retirar um livro da pilha 
//0: O programa deve ser finalizado. 
//Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá 
//informar que a pilha está vazia.

import { Stack } from "./ClasseStack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();
let escolha: number;

do {
    console.log("\n-----   MENU   -----");
    console.log("1 - Adicionar Livro na pilha\n2 - Listar todos os livros\n3 - Retirar Livro da pilha\n0 - Sair");
    escolha = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch (escolha) {
        case 1:
            let livro = readlinesync.question(`\nDigite o nome do livro: `);
            pilha.push(livro);
            console.log(`\n--- LISTA DE LIVROS NA PILHA ---`);
            pilha.printStack();
            console.log(`------------`);
            console.log("\nLivro Adicionado!");
            break;

        case 2:
            console.log(`\n--- LISTA DE LIVROS NA PILHA ---`);
            pilha.printStack();
            console.log(`------------`);
            break;

        case 3:
            if (pilha.isEmpty() == false) {
                console.log(`\nO livro ${pilha.peek()} foi retirado da pilha!`);
                pilha.pop();
                console.log(`--- LISTA DE LIVROS NA PILHA ---`);
                pilha.printStack();
                console.log(`------------`);
            } else {
                console.log("\nA pilha está vazia!")
            }
            break;

        default:
            if (escolha != 0) {
                console.log("\nPor favor, digite uma opcao valida.");
            }
    }
} while (escolha != 0);
console.log("Programa finalizado.");
