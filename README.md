# logica-programacion-3

## Calculadora de Factorial

Este programa en JavaScript calcula el factorial de un número ingresado por el usuario.

### Características

- Solicita al usuario un número mediante un input en la interfaz web
- Calcula el factorial del número ingresado
- Valida que el dato de entrada sea un número entero no negativo
- Muestra mensajes de error si el dato no es válido
- Imprime el resultado tanto en la consola como en el DOM

### Cómo usar

1. Abra el archivo `index.html` en su navegador web
2. Ingrese un número en el campo de texto
3. Haga clic en el botón "Calcular Factorial" o presione Enter
4. El resultado se mostrará en la página y en la consola del navegador

### Ejemplo

**Entrada:** 5  
**Salida:** 120

### Archivos

- `index.html`: Interfaz de usuario con formulario de entrada
- `factorial.js`: Lógica de cálculo del factorial y validación de entrada

### Validación

El programa verifica que:
- El dato ingresado sea de tipo number
- El número sea entero
- El número sea no negativo (≥ 0)
- Si el dato no cumple estas condiciones, muestra un mensaje de error y solicita un nuevo dato