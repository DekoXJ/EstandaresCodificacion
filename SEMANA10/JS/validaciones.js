export function esNumeroValido(valor) {
  const numero = parseFloat(valor);
  return !isNaN(numero);
}

export function validarDivision(divisor) {
  if (divisor === 0) {
    return false;
  }

  return true;
}

export function mostrarError(mensaje) {
  const resultadoDiv = document.getElementById("resultado");

  if (resultadoDiv) {
    resultadoDiv.textContent = mensaje;
    resultadoDiv.classList.add("error");
  }
}

export function limpiarError() {
  const resultadoDiv = document.getElementById("resultado");

  if (resultadoDiv) {
    resultadoDiv.textContent = "Esperando operación...";
    resultadoDiv.classList.remove("error");
  }
}
