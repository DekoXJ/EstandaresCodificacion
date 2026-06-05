function procesarPedido(producto, cantidad) {
  // Calcular subtotal del pedido
  const total = producto.precio * cantidad;

  // Guardar en base de datos
  guardarEnBD(producto, cantidad, total);

  return total;
}
