# Calculadora Modular con JavaScript ES6

## Descripción

Este proyecto consiste en una calculadora modular desarrollada utilizando HTML, CSS y JavaScript ES6 Modules. La aplicación permite realizar operaciones matemáticas básicas como suma, resta, multiplicación y división, aplicando buenas prácticas de desarrollo de software como modularización, validación de datos y manejo de errores.

## Estructura del Proyecto

```
Proyecto/
│
├── index.html
│
├── css/
│   └── estilos.css
│
└── js/
    ├── app.js
    ├── calculos.js
    └── validaciones.js
```

## Funcionalidades

* Suma de dos números.
* Resta de dos números.
* Multiplicación de dos números.
* División de dos números.
* Validación de entradas numéricas.
* Prevención de división entre cero.
* Manejo de errores mediante try-catch.
* Interfaz amigable y responsiva.
* Arquitectura modular mediante import/export.

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript ES6 Modules
* Visual Studio Code
* Live Server

## Requisitos para la Ejecución

### Importante

Este proyecto utiliza módulos ES6 (`import` y `export`), por lo que **NO debe ejecutarse abriendo directamente el archivo `index.html` desde el explorador de archivos**.

Ejemplo incorrecto:

```
file:///C:/Proyecto/index.html
```

Debe ejecutarse mediante un servidor local.

### Recomendación: Live Server

1. Instalar Visual Studio Code.
2. Instalar la extensión **Live Server**.
3. Abrir la carpeta del proyecto.
4. Hacer clic derecho sobre `index.html`.
5. Seleccionar **Open with Live Server**.

La aplicación se abrirá en una dirección similar a:

```
http://127.0.0.1:5500/index.html
```

## Buenas Prácticas Aplicadas

### Modularización

* `calculos.js`: contiene las operaciones matemáticas.
* `validaciones.js`: contiene las validaciones y manejo visual de errores.
* `app.js`: controla la lógica principal de la aplicación.

### DRY (Don't Repeat Yourself)

Se reutilizan funciones para evitar duplicación de código.

### KISS (Keep It Simple, Stupid)

La lógica se mantiene simple y fácil de entender.

### Validaciones

* Verificación de números válidos.
* Validación de división entre cero.
* Mensajes de error descriptivos para el usuario.

### Manejo de Excepciones

Se utiliza `try-catch` para capturar errores durante las operaciones matemáticas.

## Posibles Errores

### Error: Cannot use import statement outside a module

Solución:

Verificar que exista la línea:

```html
<script type="module" src="js/app.js"></script>
```

### Error al abrir el archivo directamente

Solución:

Ejecutar el proyecto mediante Live Server o cualquier servidor local.

### Error: No se puede dividir por cero

La aplicación detecta automáticamente este caso y muestra un mensaje de error sin detener la ejecución.

## Autor

Proyecto académico desarrollado para el curso de Maquetación Web.

## Licencia

Uso educativo y académico.
