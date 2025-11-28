//Escreva um algoritmo que leia 3 palavras (string), que definem as características 
//de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.

import readline from 'readline-sync';

console.log("Digite 3 caracteristicas para identificar um animal: (escreva por extenso apenas uma das opcoes)");
console.log("Primeira caracteristica: ");
console.log("- Vertebrado\t- Invertebrado");

let caracteristica1 = readline.question().toLowerCase();

if (caracteristica1 === 'vertebrado') {
    console.log("Segunda caracteristica:\n- Ave\t- Mamifero");
    let caracteristica2 = readline.question().toLowerCase();

    if (caracteristica2 === 'ave') {
        console.log("Terceira caracteristica:\n- Carnivoro\t- Onivoro");
        let caracteristica3 = readline.question().toLowerCase();

        if (caracteristica3 === 'carnivoro') {
            console.log(`\nCaracteristicas informadas: ${caracteristica1}, ${caracteristica2}, ${caracteristica3}`);
            console.log("Animal identificado: Águia");
        } else if (caracteristica3 === 'onivoro') {
            console.log(`\nCaracteristicas informadas: ${caracteristica1}, ${caracteristica2}, ${caracteristica3}`);
            console.log("Animal identificado: Pomba");
        } else {
            console.log("Por favor, digite uma opcao valida.");
        }

    } else if (caracteristica2 === 'mamifero') {
        console.log("Terceira caracteristica:\n- Onivoro\t- Herbivoro");
        let caracteristica3 = readline.question().toLowerCase();

        if (caracteristica3 === 'onivoro') {
            console.log(`\nCaracteristicas informadas: ${caracteristica1}, ${caracteristica2}, ${caracteristica3}`);
            console.log("Animal identificado: Homem");
        } else if (caracteristica3 === 'herbivoro') {
            console.log(`\nCaracteristicas informadas: ${caracteristica1}, ${caracteristica2}, ${caracteristica3}`);
            console.log("Animal identificado: Vaca");
        } else {
            console.log("Por favor, digite uma opcao valida.");
        }

    } else {
        console.log("Por favor, digite uma opcao valida.");
    }

} else if (caracteristica1 === 'invertebrado') {
    console.log("Segunda caracteristica:\n- Inseto\t- Anelideo");
    let caracteristica2 = readline.question().toLowerCase();

    if (caracteristica2 === 'inseto') {
        console.log("Terceira caracteristica:\n- Hematofago\t- Herbivoro");
        let caracteristica3 = readline.question().toLowerCase();

        if (caracteristica3 === 'hematofago') {
            console.log(`\nCaracteristicas informadas: ${caracteristica1}, ${caracteristica2}, ${caracteristica3}`);
            console.log("Animal identificado: Pulga");
        } else if (caracteristica3 === 'herbivoro') {
            console.log(`\nCaracteristicas informadas: ${caracteristica1}, ${caracteristica2}, ${caracteristica3}`);
            console.log("Animal identificado: Lagarta");
        } else {
            console.log("Por favor, digite uma opcao valida.");
        }

    } else if (caracteristica2 === 'anelideo') {
        console.log("Terceira caracteristica:\n- Hematofago\t- Onivoro");
        let caracteristica3 = readline.question().toLowerCase();

        if (caracteristica3 === 'hematofago') {
            console.log(`\nCaracteristicas informadas: ${caracteristica1}, ${caracteristica2}, ${caracteristica3}`);
            console.log("Animal identificado: Sanguessuga");
        } else if (caracteristica3 === 'onivoro') {
            console.log(`\nCaracteristicas informadas: ${caracteristica1}, ${caracteristica2}, ${caracteristica3}`);
            console.log("Animal identificado: Minhoca");
        } else {
            console.log("Por favor, digite uma opcao valida.");
        }

    } else {
        console.log("Por favor, digite uma opcao valida.");
    }

} else {
    console.log("Por favor, digite uma opcao valida.");
}

   





