const limiteMaximo = 20;

for (let numeroActual = 2; numeroActual <= limiteMaximo; numeroActual++) {
  let esNumeroPrimo = true;

  for (let divisorActual = 2; divisorActual < numeroActual; divisorActual++) {
    if (numeroActual % divisorActual === 0) {
      esNumeroPrimo = false;
      break;
    }
  }

  if (esNumeroPrimo) {
    console.log(numeroActual);
  }
}
