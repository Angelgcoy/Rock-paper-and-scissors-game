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
textContainer = document.querySelector(".text")

const playerText = document.querySelector("#player")
const machineText = document.querySelector("#machine");
const resultText = document.querySelector("#result");
const roundText = document.querySelector("#roundText");

const randomImages = [
    "images/image1.png",
    "images/image2.png",
    "images/image3.png",
    "images/image4.png",
    "images/image5.png",
    "images/image6.png",
    "images/image7.png",
];


let humanChoice = "";
let machineChoice = "";

let result = "";
let humanScore = 0
let machineScore = 0;
let round = 0;

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

function changePlayerText (player) {
    return playerText.textContent = "Player: " + humanChoice;
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
    else if (result === "you loose!")
        
        machineScore++ ;
}
 
function checkRound (roundd) {
    if (roundd === 5) {
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    else {}
}



function finalResult(final) {
    //HERE GOES I MAKE THE DIV FOR THE FINAL MESSAGE TO THE WINNER
     if (round === 5){
        const winnerText = document.createElement("p"); 
        winnerText.classList.add("para");
        winnerText.style.width = "100%";
        winnerText.style.textAlign = "center";
        winnerText.fontSize = "15px";
        winnerText.style.color = "#1B9E3A";

        //HERE I MAKE THE DIV FOR THE RANDOM IMAGES
        const imageDiv = document.createElement("div");
              imageDiv.classList.add("images");
                imageDiv.style.width = "100%";
                imageDiv.style.maxWidth = "400px";     
                imageDiv.style.height = "300px";       
                imageDiv.style.overflow = "hidden";    
                imageDiv.style.border = "2px solid #ccc"
                imageDiv.style.marginTop = '40px';      
                imageDiv.style.marginLeft = 'auto';     
                imageDiv.style.marginRight = 'auto';   
                
                
        const imageRandomSelector = Math.floor(Math.random() * randomImages.length);
        const rutaAzar = randomImages[imageRandomSelector]

        const image = document.createElement("img");
        image.alt = "PARA REFLEXIONAR:";
        image.style.width = "100%";
        image.style.height = "100%";
        image.style.objectFit = "contain";
        image.src = rutaAzar;


         if (round === 5 && humanScore > machineScore) {
            
             winnerText.textContent = "Ganaste!, solo no se lo cuentes a tu familia como si fuera un logro...";
         }
         else if 
             (round === 5 && humanScore < machineScore) {
                  winnerText.style.color = "red";
                 winnerText.textContent = "perdiste! no es como si eso fuera sorpresa.";
               
         } 
         else if (round === 5 && humanScore === machineScore) {
            winnerText.style.color = "yellow";
            winnerText.textContent = "empate! no se supone que eso debiera ocurrir..."
            
            ;}

         textContainer.appendChild(winnerText);
         imageDiv.appendChild(image)
         document.body.appendChild(imageDiv)


     }   
    }
    
    function changeRoundText (actualRound) {
        return roundText.textContent = "Round " + round;
    }


btnRock.addEventListener('click', function(){

    humanChoice = "rock";
    machineChoice = getMachineChoice();
    result = comparison(humanChoice, machineChoice);
    playRound(result);
    round++;
    

    changeMachineText(machineChoice);
    changePlayerText(humanChoice);
     changeResultText(result);
     changeRoundText(round);
     checkRound(round);
     finalResult(round);
});

btnPaper.addEventListener('click', function(){

    humanChoice = "paper";
    machineChoice = getMachineChoice();
    result = comparison(humanChoice, machineChoice);
    playRound(result);
    round++;

    changeMachineText(machineChoice);
    changePlayerText(humanChoice);
     changeResultText(result);
     changeRoundText(round);
     checkRound(round);
     finalResult(round);
});

btnScissors.addEventListener('click', function(){

    humanChoice = "scissors";
    machineChoice = getMachineChoice();
    result = comparison(humanChoice, machineChoice);
    playRound(result);
    round++;

    changeMachineText(machineChoice);
    changePlayerText(humanChoice);
     changeResultText(result);
     changeRoundText(round);
     checkRound(round);
     finalResult(round);

});



