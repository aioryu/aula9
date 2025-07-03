import ler = require("readline-sync");
const list: Array<Number> = new Array<Number>(12,75);
 console.log("Coloque um número na lista:");
 //et numero: Number = readline.questionInt();
list.push(ler.questionInt());

console.log(list);

console.table(list);