// Importa a biblioteca para ler do teclado
import readlineSync from 'readline-sync';

// Array tipado para armazenar strings (cores)
const cores: Array<string> = new Array<string>();

// Loop para ler 5 cores do usuário
for (let i = 0; i < 5; i++) {
    const cor = readlineSync.question(`Digite a cor ${i + 1}: `);
    cores.push(cor);
}

// Exibe as cores digitadas
console.log("\nListar todas as cores:");
cores.forEach(cor => console.log(cor));

// Ordena e exibe as cores em ordem alfabética
const coresOrdenadas = [...cores].sort();
console.log("\nOrdenar as cores:");
console.table(coresOrdenadas);
coresOrdenadas.forEach(cor => console.log(cor));
