// // Importa a biblioteca para ler do teclado
import ler = require("readline-sync");


// Classe de Fila
class Fila {
  items: string[] = [];

  // Método para adicionar um cliente à fila
  adicionar(cliente: string) {
    this.items.push(cliente);
    console.log(`Cliente "${cliente}" foi adicionado à fila.`);
  }

  // Método para listar todos os clientes na fila
  listar() {
    if (this.items.length === 0) {
      console.log("A fila está vazia.");
    } else {
      console.log("Clientes na fila:");
      this.items.forEach((cliente, i) => {
        console.log(`${i + 1}. ${cliente}`);
      });
    }
  }

  // Método para retirar um cliente da fila
  retirar() {
    if (this.items.length === 0) {
      console.log("A fila está vazia.");
    } else {
      const removido = this.items.shift();
      console.log(`Cliente "${removido}" foi retirado da fila.`);
    }
  }
}

// Cria uma instância da classe Fila
const fila = new Fila();
let opcao = -1;

// Variável para armazenar a opção do usuário
do {
  console.log("***************************************");
  console.log("   1 - Adicionar Cliente na Fila");
  console.log("   2 - Listar todos os Clientes");
  console.log("   3 - Retirar Cliente da Fila");
  console.log("   0 - Sair");
  console.log("***************************************");
  opcao = ler.questionInt("Entre com a opção desejada: ");

  switch (opcao) {
    case 1:
      const nome = ler.question("Digite o nome do cliente: ");
      fila.adicionar(nome);
      break;
    case 2:
      fila.listar();
      break;
    case 3:
      fila.retirar();
      break;
    case 0:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
  }
} while (opcao !== 0);
