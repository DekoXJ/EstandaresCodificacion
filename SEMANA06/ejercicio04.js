function mostrarSaludo() {
  let nombre = prompt("Ingresa tu nombre:");
  let edad = prompt("Ingresa tu edad:");

  // Validar nombre
  if (!nombre || nombre.trim() === "") {
    nombre = "Invitado";
  }

  // Validar edad
  if (isNaN(edad) || edad.trim() === "") {
    document.getElementById("mensaje").textContent =
      "Error: la edad debe ser un número válido.";
    return;
  }

  // Mostrar mensaje de forma segura
  document.getElementById("mensaje").textContent =
    `Bienvenido ${nombre}, tienes ${edad} años`;
}
