try {
  const a = 10;
  const b = 0;

  if (b === 0) {
    throw new Error("No se puede dividir entre cero");
  }

  const resultado = a / b;
  console.log(resultado);
} catch (error) {
  console.log("Error:", error.message);
}
