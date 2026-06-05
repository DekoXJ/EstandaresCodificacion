function aplicarDescuento(precio, usuario, fecha) {
  let descuento = 0;

  const esUsuarioVip = usuario.tipo === "VIP";
  const tieneMasDeUnAnoAntiguedad = usuario.antiguedad > 12;
  const esDiaPromocional = fecha.getMonth() === 6 && fecha.getDate() === 15;
  const esUsuarioRegularConCompraAlta =
    precio > 100 && usuario.tipo === "regular";

  if (esUsuarioVip) {
    descuento = 0.2;
  } else if (tieneMasDeUnAnoAntiguedad) {
    descuento = 0.1;
  } else if (esDiaPromocional) {
    descuento = 0.15;
  } else if (esUsuarioRegularConCompraAlta) {
    descuento = 0.05;
  }

  return precio * (1 - descuento);
}
