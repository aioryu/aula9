// // Importa a biblioteca para ler do teclado
import ler = require("readline-sync");

// Classe de Pilha
class Pilha {
  items: string[] = [];

//
  adicionar(livro: string) {
    this.items.push(livro);
    console.log(`Livro "${livro}" foi adicionado à pilha.`);
  }
// Método para adicionar um livro à pilha
  listar() {
    if (this.items.length === 0) {
      console.log("A pilha está vazia!");
    } else {
      console.log("Livros na pilha:");
      this.items.forEach((livro, index) => {
        console.log(`${index + 1}. ${livro}`);
      });
    }
  }
// Método para listar todos os livros na pilha
  retirar() {
    if (this.items.length === 0) {
      console.log("A pilha está vazia!");
    } else {
      const removido = this.items.pop();
      console.log(`Livro removido: "${removido}"`);
    }
  }
}

// Método para retirar o livro do topo da pilha
const pilha = new Pilha();
let opcao = -1;

// Variável para armazenar a opção do usuário

do {
  console.log("****************************************");
  console.log("  1 - Adicionar Livro na pilha");
  console.log("  2 - Listar todos os Livros");
  console.log("  3 - Retirar Livro da pilha");
  console.log("  0 - Sair");
  console.log("****************************************");
  opcao = ler.questionInt("Entre com a opção desejada: ");

  // Exibe o menu de opções para o usuário
  // Lê a opção escolhida pelo usuário
  switch (opcao) {
    case 1:
      const livro = ler.question("Digite o nome do livro: ");
      pilha.adicionar(livro);
      break;
    case 2:
      pilha.listar();
      break;
    case 3:
      pilha.retirar();
      break;
    case 0:
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida!");
  }
} while (opcao !== 0);
// Fim do programa