let numeroadivinha = Math.floor(Math.random() * 100) + 1; // let para poder redefinir
let tentativas = 0;
const maxTentativas = 5;

function verificarPalpite() {
  const palpiteUsuario = Number(document.getElementById("palpite").value);
  const resultado = document.getElementById("resultado");

  if (tentativas >= maxTentativas) {
    resultado.textContent = `Você atingiu o limite de ${maxTentativas} tentativas! O número era ${numeroadivinha}. Jogo encerrado.`;
    bloquearJogo();
    return;
  }

  if (!palpiteUsuario || palpiteUsuario < 1 || palpiteUsuario > 100) {
    resultado.textContent = "Por favor, insira um número válido entre 1 e 100.";
    return;
  }

  tentativas++;

  document.getElementById(
    "contador-tentativas"
  ).textContent = `Tentativas: ${tentativas}`;

  if (palpiteUsuario === numeroadivinha) {
    resultado.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativa(s).`;
    bloquearJogo();
  } else if (palpiteUsuario < numeroadivinha) {
    resultado.textContent = "Tente um número maior!";
  } else {
    resultado.textContent = "Tente um número menor!";
  }

  document.getElementById("palpite").value = "";
  document.getElementById("palpite").focus();
}

function bloquearJogo() {
  document.getElementById("palpite").disabled = true;
  document.querySelector("button").disabled = true;
  document.getElementById("reiniciar").style.display = "inline-block";
}

function reiniciarJogo() {
  numeroadivinha = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  document.getElementById("palpite").disabled = false;
  document.querySelector("button").disabled = false;
  document.getElementById("resultado").textContent = "";
  document.getElementById("palpite").value = "";
  document.getElementById("palpite").focus();
  document.getElementById("reiniciar").style.display = "none";
}
