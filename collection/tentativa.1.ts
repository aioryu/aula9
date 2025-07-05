import ler = require("readline-sync");
import { Queue } from "../stackMetodos";
import {Stack} from "../queueMetodos";

const fila = new Queue<string>();
let continua: string =  '';

do{
     console.log("\n########## Menu Fila de Atendimento ##########");
         console.log("1 - Cadastrar usuário");
         console.log("2 - Ver lista de usuários");
         console.log("3 - Ver lista de usuários");
         console.log("4 - Ver próximo usuário da fila");
         const opcao = ler.questionInt("Digite a opção: ");
    
    switch (opcao) {
        case 1:
            fila.enqueue(ler.question("Digite o nome do usuário: "));
           
            break;
   
        case 2:
            fila.printQueue
           
   
            break;
   
        case 3:
           fila
   
            break;
        case 4:
            console.log("Exibir o Primeiro Elemento da fila: " + fila.peek());      
        default:
    }
    continua = ler.question("Deseja continuar? (s/n): ").toLowerCase();
}while(continua === 's');