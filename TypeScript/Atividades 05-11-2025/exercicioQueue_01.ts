//Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, 
//para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa 
//deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
//1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
//2: Listar todos os Clientes na fila
//3: Chamar (retirar) uma pessoa da fila 
//0: O programa deve ser finalizado. 
//Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar 
//retirar (chamar) um cliente da fila.

import { Queue } from "./ClasseQueue";
import readlinesync = require('readline-sync');

const fila = new Queue<string>();
let cliente: string;
let escolha: number;
do {
    console.log("\n-----   MENU   -----");
    console.log("1 - Adicionar Clientes na fila\n2 - Listar todos os Clientes\n3 - Retirar Clientes da fila\n0 - Sair");
    escolha = readlinesync.questionInt("Entre com a opcao desejada: ");

    switch (escolha) {
        case 1:
            cliente = readlinesync.question(`\nDigite o nome do Cliente: `);
            fila.enqueue(cliente);
            console.log(`\n--- FILA ---`);
            fila.printQueue();
            console.log(`------------`);
            console.log("\nCliente Adicionado!");
            break;

        case 2:
            console.log(`\n--- FILA ---`);
            fila.printQueue();
            console.log(`------------`);
            break;

        case 3:
            console.log(`\nO(A) cliente ${fila.peek()} foi chamado!`);
            fila.dequeue();
            console.log(`--- FILA ---`);
            fila.printQueue();
            console.log(`------------`);
            break;
            
        default:
            if (escolha != 0) {
                console.log("\nPor favor, digite uma opcao valida.");
            }
    }
} while (escolha != 0);
console.log("Programa finalizado.");