// Constante para el valor de PI
const PI = 3.1416;

// Clase que realiza cálculos geométricos
class CalculadoraGeometrica {
  constructor(radio, base, altura) {
    this.radio = radio;
    this.base = base;
    this.altura = altura;
  }

  // Calcula el área de un círculo
  calcularAreaCirculo() {
    return PI * this.radio * this.radio;
  }

  // Calcula el perímetro (circunferencia) de un círculo
  calcularPerimetroCirculo() {
    return 2 * PI * this.radio;
  }

  // Calcula el área de un rectángulo
  calcularAreaRectangulo() {
    return this.base * this.altura;
  }

  // Calcula el perímetro de un rectángulo
  calcularPerimetroRectangulo() {
    return 2 * (this.base + this.altura);
  }
}

// Creación del objeto
const calculadoraGeometrica = new CalculadoraGeometrica(5, 10, 4);

// Pruebas de los métodos
console.log("Área del círculo:", calculadoraGeometrica.calcularAreaCirculo());
console.log(
  "Perímetro del círculo:",
  calculadoraGeometrica.calcularPerimetroCirculo(),
);
console.log(
  "Área del rectángulo:",
  calculadoraGeometrica.calcularAreaRectangulo(),
);
console.log(
  "Perímetro del rectángulo:",
  calculadoraGeometrica.calcularPerimetroRectangulo(),
);
