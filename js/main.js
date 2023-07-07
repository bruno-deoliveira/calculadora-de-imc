import { Modal } from './modal.js'
import { AlertError } from "./alert_error.js"; 
import { calculateIMC, notNumber } from "./utils.js"

//variáveis
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');



//add os dados na memoria
form.onsubmit = function (event) {
    event.preventDefault();

    const weight = inputWeight.value; //valor do peso
    const height = inputHeight.value; //valor da altura

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height); //validar numeros para peso e altura
    
    if (weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()


    const result = calculateIMC(weight, height); //Função IMC
    displayResultMessage(result)
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}

//Para fechar o alerta de erro vermelho 
inputWeight.oninput =() => {
    AlertError.close()
}
inputHeight.oninput =() => {
    AlertError.close()
}