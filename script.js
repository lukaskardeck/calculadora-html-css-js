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

// Variáveis globais
let valorAtual = "";
let valorAnterior = "";
let calculando = false;
let operador = null;

// Funções
function atualizaDisplayResultado() {
  elementos.displayResultado.textContent = valorAtual;
}

function atualizaDisplayMenor() {
  if (operador !== null) {
    elementos.displayMenor.textContent = valorAnterior + operador;
  } else {
    elementos.displayMenor.textContent = "";
  }
}

function atualizaDisplayIgual(isIgual) {
  if (isIgual) elementos.displayIgual.textContent = "=";
  else elementos.displayIgual.textContent = "";
}

function insereNumero(evento) {
  if (valorAtual.length < 8) {
    if (calculando) {
      valorAtual = evento.target.textContent;
      calculando = false;
    } else {
      if (valorAtual === "0" ) {
        valorAtual = evento.target.textContent;
      } else {
        valorAtual += evento.target.textContent;
      }
    }

    atualizaDisplayIgual(false);
    atualizaDisplayResultado();
  }
}

function insereOperador(evento) {
  if (!valorAtual.endsWith(".")) {
    if (operador !== null && !calculando && valorAtual !== "") {
      calcular();
    }
    if (valorAtual !== "") {
      valorAnterior = valorAtual;
      valorAtual = "";
    }
    operador = evento.target.textContent;
    atualizaDisplayMenor();
    atualizaDisplayResultado();
    atualizaDisplayIgual(false);
  }
}

function calcular() {
  let resultado;
  const anterior = Number(valorAnterior);
  const atual = Number(valorAtual);

  switch (operador) {
    case "+":
      resultado = anterior + atual;
      break;
    case "-":
      resultado = anterior - atual;
      break;
    case "*":
      resultado = anterior * atual;
      break;
    case "/":
      if (atual !== 0) {
        resultado = anterior / atual;
      } else {
        alert("Divisão por zero não é permitida");
        return;
      }
      break;
    default:
      return;
  }

  valorAtual = resultado.toString();
  valorAnterior = "";
  operador = null;
  calculando = true;
  atualizaDisplayResultado();
  atualizaDisplayMenor();
}

function limparDisplay() {
  valorAtual = "";
  valorAnterior = "";
  operador = null;
  calculando = false;
  elementos.displayIgual.textContent = "";
  elementos.displayMenor.textContent = "";
  elementos.displayResultado.textContent = "";
}

function deletarUltimo() {
  if (valorAtual !== "0") {
    if (valorAtual.length === 1) valorAtual = "0";
    else valorAtual = valorAtual.slice(0, -1);
    atualizaDisplayResultado();
  }
}

function adicionaPonto() {
  if (!valorAtual.includes(".")) {
    valorAtual += ".";
    atualizaDisplayResultado();
  }
}

function calculaIgual() {
  if (operador !== null) {
    calcular();
    operador = null;
    elementos.displayMenor.textContent = "";
    atualizaDisplayIgual(true);
  }
}

// Eventos
elementos.numeros.forEach((num) => {
  num.addEventListener("click", insereNumero);
});

elementos.operadores.forEach((op) => {
  op.addEventListener("click", insereOperador);
});

elementos.resetar.addEventListener("click", limparDisplay);

elementos.deletar.addEventListener("click", deletarUltimo);

elementos.ponto.addEventListener("click", adicionaPonto);

elementos.igual.addEventListener("click", calculaIgual);
