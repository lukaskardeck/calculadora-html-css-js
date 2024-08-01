// Elementos da tela
const elementos = {
    displayResultado: document.querySelector('.resultado'),
    displayIgual: document.querySelector('.opIgual'),
    displayMenor: document.querySelector('.displayMenor'),
    numeros: document.querySelectorAll('.num'),
    operadores: document.querySelectorAll('.operador'),
    deletar: document.querySelector('.deletar'),
    ponto: document.querySelector('.ponto'),
    resetar: document.querySelector('.resetar'),
    igual: document.querySelector('.igual')
}

// variáveis globais
let valorAtual = "0";

// Funções
function atualizaDisplayResultado() {
    elementos.displayResultado.textContent = valorAtual;
}

function insereNumero(evento) {
    if (valorAtual === "0" ) {
        valorAtual = evento.target.textContent;
    } else {
        valorAtual += evento.target.textContent;
    }

    atualizaDisplayResultado();
}

function limparDisplay() {
    valorAtual = "0";
    atualizaDisplayResultado();
}

// Eventos
elementos.numeros.forEach((num) => {
    num.addEventListener('click', insereNumero);
});

elementos.resetar.addEventListener('click', limparDisplay)