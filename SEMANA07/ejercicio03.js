function procesarPago(usuario, monto, metodoPago) {
  if (!usuario) {
    return "Usuario no existe";
  }

  if (!usuario.activo) {
    return "Usuario inactivo";
  }

  if (monto <= 0) {
    return "Monto inválido";
  }

  if (metodoPago === "tarjeta") {
    return "Pago con tarjeta procesado";
  }

  if (metodoPago === "efectivo") {
    return "Pago en efectivo procesado";
  }

  return "Método de pago no soportado";
}
