// ============================================
// Semana 13 - Documentación con Comentarios
// ============================================

/**
 * Suma dos números.
 *
 * @param {number} a Primer número.
 * @param {number} b Segundo número.
 * @returns {number} Resultado de la suma.
 */
function sumar(a, b) {
  return a + b;
}

/**
 * Resta dos números.
 *
 * @param {number} a Minuendo.
 * @param {number} b Sustraendo.
 * @returns {number} Resultado de la resta.
 */
function restar(a, b) {
  return a - b;
}

/**
 * Multiplica dos números.
 *
 * @param {number} a Primer número.
 * @param {number} b Segundo número.
 * @returns {number} Resultado de la multiplicación.
 */
function multiplicar(a, b) {
  return a * b;
}

/**
 * Divide dos números.
 *
 * @param {number} a Dividendo.
 * @param {number} b Divisor.
 * @returns {number} Resultado de la división.
 */
function dividir(a, b) {
  return a / b;
}

/**
 * Calcula todas las operaciones básicas entre dos números.
 *
 * @param {number} a Primer número.
 * @param {number} b Segundo número.
 * @returns {Object} Objeto con los resultados.
 *
 * @example
 * calcularTodo(10,5);
 */
function calcularTodo(a, b) {
  // Crear objeto con todas las operaciones
  return {
    suma: sumar(a, b),
    resta: restar(a, b),
    multiplicacion: multiplicar(a, b),
    division: dividir(a, b),
  };
}

// Ejecutar ejemplo
const resultado = calcularTodo(10, 5);

// Mostrar resultado en consola
console.log(resultado);
