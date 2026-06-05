let sumaTotal = 0;
const numeroInicial = 1;
const numeroFinal = 5;

for (let numeroActual = numeroInicial; ; numeroActual++) {
  const estaDentroDelRango = numeroActual <= numeroFinal;

  if (!estaDentroDelRango) {
    break;
  }

  sumaTotal += numeroActual;
}

console.log("La suma es " + sumaTotal);
