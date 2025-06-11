const numeroadivinha = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpiteUsuario = Number(document.getElementById("palpite").value);
  const resultado = document.getElementById("resultado");
  const maxTentativas = 5;

  if (tentativas >= maxTentativas) {
    resultado.textContent = `Você atingiu o limite de ${maxTentativas} tentativas! O número era ${numeroSecreto}. Jogo encerrado.`;
    return;
  }

  if (!palpiteUsuario || palpiteUsuario < 1 || palpiteUsuario > 100) {
    resultado.textContent = "Por favor, insira um número válido entre 1 e 100.";
    return;
  }

  tentativas++;

  if (palpiteUsuario === numeroadivinha) {
    resultado.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas.`;
  } else if (palpiteUsuario < numeroadivinha) {
    resultado.textContent = "Tente um número maior!";
  } else {
    resultado.textContent = "Tente um número menor!";
  }

  document.getElementById("palpite").value = "";
  document.getElementById("palpite").focus();
}
