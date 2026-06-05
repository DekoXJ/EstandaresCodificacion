function calcularTotal(precio, cantidad) {
  const subtotal = precio * cantidad;
  const IGV = subtotal * 0.18;
  const total = subtotal + IGV;

  return total;
}

const precio = 100;
const cantidad = 2;
const totalCalculado = calcularTotal(precio, cantidad);

console.log(totalCalculado);
