function enviar(event) {
  event.preventDefault();

  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura || altura <= 0) {
    resultado.innerHTML = "Peso ou altura inválidos.";
    return;
  }

  const imc = peso / altura ** 2;

  if (imc < 18.5) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (abaixo do peso).`;
  } else if (imc < 25) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (peso normal).`;
  } else if (imc < 30) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (sobrepeso).`;
  } else if (imc < 35) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (obesidade grau 1).`;
  } else if (imc < 40) {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (obesidade grau 2).`;
  } else {
    resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (obesidade grau 3).`;
  }
}
