// Constante que almacena el valor de PI
const PI = 3.1416;

// Función que calcula el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
  const areaRectangulo = base * altura;
  return areaRectangulo;
}

// Función que calcula la circunferencia de un círculo
function calcularCircunferencia(radio) {
  const circunferencia = 2 * PI * radio;
  return circunferencia;
}

// Variables de prueba con nombres claros en camelCase
const baseRectangulo = 10;
const alturaRectangulo = 5;
const radioCirculo = 7;

console.log(calcularAreaRectangulo(baseRectangulo, alturaRectangulo));
console.log(calcularCircunferencia(radioCirculo));
