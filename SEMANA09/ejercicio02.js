try {
  const numero = parseInt("hola");

  if (isNaN(numero)) {
    throw new Error("No se pudo convertir el texto a número.");
  }

  console.log(numero);
} catch (error) {
  console.log("Se produjo un error:", error.message);
}
