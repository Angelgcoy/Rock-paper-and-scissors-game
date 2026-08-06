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
let humanChoice = "";
let machineChoice = "";

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

function comparar(usser, machine) {
    if (usser === machine) {
        return "Draw!";
    }
    else if ((usser === "rock" && machine === "paper") ||
            (usser === "paper" && machine === "scissors") ||
            (usser === "scissors" && machine === "rock") )
     return "you loose!"
     else {
        return "you win!"
     }
}


btnRock.addEventListener('click', function(){
    humanChoice = "rock";
    machineChoice = getMachineChoice();

    let resultado = comparar(humanChoice, machineChoice);
    console.log(resultado)


})


