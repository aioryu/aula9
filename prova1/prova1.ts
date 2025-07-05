import ler = require("readline-sync");

// Classe genérica de Fila
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T) {
        this.items.push(item);
        console.log(`Usuário "${item}" foi adicionado à fila.`);
    }

    dequeue(): T | undefined {
        if (this.items.length === 0) {
            console.log("A fila está vazia!");
            return;
        }
        return this.items.shift();
    }

    printQueue() {
        if (this.items.length === 0) {
            console.log("A fila está vazia!");
        } else {
            console.log("Lista de usuários na fila:");
            this.items.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        }
    }

    peek(): T | undefined {
        if (this.items.length === 0) {
            console.log("A fila está vazia!");
            return;
        }
        return this.items[0];
    }
}

// Programa principal
const fila = new Queue<string>();
let continuar = '';

do {
    console.log("\n########## Menu Fila de Atendimento ##########");
    console.log("1 - Cadastrar usuário");
    console.log("2 - Finalizar atendimento (remover da fila)");
    console.log("3 - Ver lista de usuários");
    console.log("4 - Ver próximo usuário da fila");
    const opcao = ler.questionInt("Digite a opção: ");

    switch (opcao) {
        case 1:
            const nome = ler.question("Digite o nome do usuário: ");
            fila.enqueue(nome);
            break;

        case 2:
            const removido = fila.dequeue();
            if (removido) {
                console.log(`Usuário "${removido}" foi removido da fila.`);
            }
            break;

        case 3:
            fila.printQueue();
            break;

        case 4:
            const proximo = fila.peek();
            if (proximo) {
                console.log(`Próximo usuário na fila: ${proximo}`);
            }
            break;

        default:
            console.log("Opção inválida!");
    }

    continuar = ler.question("Deseja continuar? (s/n): ").toLowerCase();
} while (continuar === 's');