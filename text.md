//variáveis

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span');
const modalBtnClose = document.querySelector('.modal button.close');

//add os dados na memoria
form.onsubmit = function (event) {
    event.preventDefault();

    const weight = inputWeight.value; //valor do peso
    const height = inputHeight.value; //valor da altura

    const result = IMC(weight, height) //Função IMC
    const message = `Seu IMC é de ${result}`

    modalMessage.innerText = message; //para alterar o texto do modal
    modalWrapper.classList.add("open"); //para abrir e aparecer a pagina modal
}

modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open') //para fechar e desaparescer a pagina modal
}

//Função de IMC
function IMC(weight, height) {
    return(weight / ((height / 100) ** 2)).toFixed(2)
}
