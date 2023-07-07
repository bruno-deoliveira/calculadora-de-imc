//função para validar somente números na hora de preencher
export function notNumber(value) {
    return isNaN(value) || value == "";
}

//Função de IMC
export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
