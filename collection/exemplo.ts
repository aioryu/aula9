import ler = require("readline-sync");
import { Queue } from "../stackMetodos";
import {Stack} from "../queueMetodos";

const fila = new Queue<string>();
let continua: string =  '';

do{
     console.log("####### Fila de atendimento ###############");
    console.log("### Digite 1 cadastrar usuario ############");
    console.log("### Digite 2 finalizar atendimento ########");
    console.log("### Digite 3 ver lista de usuario #########");
    console.log("### Digite 4 proximo usuario #########");
    let opcao = ler.questionInt("Digite a opção: ");
    
    switch (opcao) {
        case 1:
            fila.enqueue(ler.question("Digite o nome do usuário: "));
           
            break;
   
        case 2:
            fila
           
   
            break;
   
        case 3:
           fila.printQueue();
   
            break;
        case 4:
            console.log("Exibir o Primeiro Elemento da fila: " + fila.peek());      
        default:
    }
    continua = ler.question("Deseja continuar? (s/n): ").toLowerCase();
}while(continua === 's');