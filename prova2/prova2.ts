import ler = require("readline-sync");

// Classe de Pilha
class Stack<T> {
    private items: T[] = [];

    push(item: T) {
        this.items.push(item);
        console.log(`Livro "${item}" foi adicionado à pilha.`);
    }

    pop(): T | undefined {
        if (this.items.length === 0) {
            console.log("A pilha está vazia!");
            return;
        }
        return this.items.pop();
    }

    printStack() {
        if (this.items.length === 0) {
            console.log("A pilha está vazia!");
        } else {
            console.log("Livros na pilha:");
            this.items.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        }
    }
}

// Programa principal
const pilha = new Stack<string>();
let continuar = '';

do {
    console.log("\n########## Menu Pilha de Livros ##########");
    console.log("1 - Adicionar livro");
    console.log("2 - Listar livros");
    console.log("3 - Retirar livro do topo");
    const opcao = ler.questionInt("Digite a opção: ");

    switch (opcao) {
        case 1:
            const nomeLivro = ler.question("Digite o nome do livro: ");
            pilha.push(nomeLivro);
            break;

        case 2:
            pilha.printStack();
            break;

        case 3:
            const removido = pilha.pop();
            if (removido) {
                console.log(`Livro removido: "${removido}"`);
            }
            break;

        default:
            console.log("Opção inválida!");
    }

    continuar = ler.question("Deseja continuar? (s/n): ").toLowerCase();
} while (continuar === 's');
