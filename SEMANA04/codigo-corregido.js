class CalculadoraVenta {
  constructor(precio, cantidad, tasaIgv) {
    this.precio = precio;
    this.cantidad = cantidad;
    this.tasaIgv = tasaIgv;
  }

  calcularTotal() {
    return this.precio * this.cantidad * (1 + this.tasaIgv);
  }
}

const calculadoraVenta = new CalculadoraVenta(100, 2, 0.18);
const totalCalculado = calculadoraVenta.calcularTotal();

console.log(totalCalculado);
