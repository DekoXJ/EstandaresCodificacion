function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir por cero");
    }

    const resultado = a / b;
    console.log("Resultado: " + resultado);
  } catch (error) {
    console.log("Error: " + error.message);
  } finally {
    console.log("Intento de división completado");
  }
}

// Pruebas
dividir(10, 2);
dividir(10, 0);
