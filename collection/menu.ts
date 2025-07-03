import readlineSync from 'readline-sync';

const list: number[] = [12, 75];

console.log("Escolha uma opção:");
console.log("1 - Adicionar número");
console.log("2 - Remover último número");
console.log("3 - Exibir lista");

const opcao: number = readlineSync.questionInt("Digite sua opção: ");

switch (opcao) {
    case 1:
        console.log("Coloque um número na lista:");
        list.push(readlineSync.questionInt());
        break;
    case 2:
        list.pop();
        break;
    case 3:
        console.table(list);
        break;
    default:
        console.log("Opção inválida.");
}