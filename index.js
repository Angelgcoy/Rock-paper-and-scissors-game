/*Declarar opciones en botones
Declarar líneas de texto:

-ronda

-ganador

-eleccion de jugador y máquina

Variable para guardar la elección de usuario

Contador de rondas

Función para elección aleatoria de la máquina

Escuchar de eventos al hacer click en una opción

Comparador de elección entre usuario y máquina dando empate o ganador

Función para sumar 1 al contador de rondas

Función para modificar el las líneas de texto en base al ganador o empate

Función para escuchar cuántas rondas van y si llega a 5 comparar victorias y declarar ganador

Función para bloquear botones cuando se culminenas 5 rondas */

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

const machineText = document.querySelector("#machine");
const resultText = document.querySelector("#result");
const roundText = document.querySelector("#roundText");

let humanChoice = "";
let machineChoice = "";

let result = "";
let humanScore = 0
let machineScore = 0;
let round = 1;

function getMachineChoice (){
      const eleccion = Math.floor(Math.random() * 3) +1;
     if (eleccion === 1 ) {
        return "rock";
     }
     else if (eleccion ===2 ) {
        return "paper";
     }
     else return "scissors";
}

function comparison(human, machine) {
if (human === machine) {
        return "Draw!";
    }
    else if ((human === "rock" && machine === "paper") ||
            (human === "paper" && machine === "scissors") ||
            (human === "scissors" && machine === "rock") )
     return "you loose!"
     else {
        return "you win!"
     }
}

function changeMachineText (machine) {
        return machineText.textContent = "Machine: " + machineChoice;
}

function changeResultText (changeResult) {
    return resultText.textContent = "Result: " + result;
}

function playRound (resultadoRonda) {
    if (result === "Draw!") { 
        return;
    }
     if (result === "you win!") {
          humanScore++ ;
    }
    else if (result === "you loose!")  machineScore++ ;
}
 

btnRock.addEventListener('click', function(){

    humanChoice = "rock";
    machineChoice = getMachineChoice();
    result = comparison(humanChoice, machineChoice);
    playRound(result);

    changeMachineText(machineChoice);
     changeResultText(result);
     console.log(result);

     console.log(humanScore);
     console.log(machineScore);
   
    

})


