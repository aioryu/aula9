import readlineSync from 'readline-sync';

const numeros: Set<number> = new Set(); // Cria um Set vazio do tipo number

// Continua pedindo até o Set ter 10 números únicos
while (numeros.size < 10) {
    const num: number = readlineSync.questionInt("Digite um número inteiro: ");
    numeros.add(num); // Se for repetido, o Set ignora automaticamente
}

console.log("Listar dados do Set:");
numeros.forEach((valor) => {
    console.log(valor);
    console.table(numeros); // Mostra cada número que está no Set
});