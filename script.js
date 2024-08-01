// Elementos da tela
const elementos = {
  displayResultado: document.querySelector(".resultado"),
  displayIgual: document.querySelector(".opIgual"),
  displayMenor: document.querySelector(".displayMenor"),
  numeros: document.querySelectorAll(".num"),
  operadores: document.querySelectorAll(".operador"),
  deletar: document.querySelector(".deletar"),
  ponto: document.querySelector(".ponto"),
  resetar: document.querySelector(".resetar"),
  igual: document.querySelector(".igual"),
};

// variáveis globais
let valorAtual = "0";

// Funções
function atualizaDisplayResultado() {
  elementos.displayResultado.textContent = valorAtual;
}

function insereNumero(evento) {
  if (valorAtual === "0") {
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

function deletarUltimo() {
  if (valorAtual !== "0") {
    if (valorAtual.length === 0) valorAtual = "0";
    else valorAtual = valorAtual.substring(0, valorAtual.length() - 1);
    atualizaDisplayResultado();
  }
}

// Eventos
elementos.numeros.forEach((num) => {
  num.addEventListener("click", insereNumero);
});

elementos.resetar.addEventListener("click", limparDisplay);

elementos.deletar.addEventListener('click', deletarUltimo);