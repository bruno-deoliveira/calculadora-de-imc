export const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal .title span"),
    buttonClose: document.querySelector(".modal button.close"),

    open: function () {
        Modal.wrapper.classList.add("open"); //para abrir e aparecer a pagina modal
    },
    close: function () {
        Modal.wrapper.classList.remove("open"); //para fechar e desaparescer a pagina modal
    },
};

Modal.buttonClose.onclick = () => {
    Modal.close();
};

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) { //precionar a tecla ESC
    if(event.key==='Escape'){
        Modal.close()
    }
}