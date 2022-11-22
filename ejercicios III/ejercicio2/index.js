/**
 *
 * 1️⃣ Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos exactamente 3 veces. Si el usuario adivina el número correctamente, imprime "¡Eso fue correcto!" De lo contrario, imprimirá "Lo siento, eso estaba mal." El programa se detiene después del 4º intento o si lo adivinaron correctamente.
 * Puedes usar este código para obtener el PIN de entrada del usuario:
 * const pin = prompt('Introduce el PIN:');
 *
 */

const pinCorrecto = '1234';
let pin = prompt('Introduce el PIN de 4 números:');
let intentos = 0;

while (intentos < 3) {
  if (pin === pinCorrecto) {
    console.log('¡Eso fue correcto!');
    break;
  } else {
    console.log('Lo siento, eso estaba mal.');
    intentos++;
    pin = prompt(`Te quedan ${4 - intentos} intentos`);
    45;
  }
}

/**
 * 2️⃣ Haz el mismo ejercicio pero ahora el usuario tiene intentos infinitos hasta que acierte el PIN o escriba `salir`.
 */

const pinCorrecto2 = '1234';
let pin2 = prompt('Introduce el PIN de 4 números:');

while (pin2 !== 'salir') {
  if (pin2 === pinCorrecto2) {
    console.log('¡Eso fue correcto!');
    break;
  } else {
    console.log('Lo siento, eso estaba mal.');
    pin2 = prompt(
      'Introduce el PIN de 4 números, o escribe "salir" para salir:'
    );
  }
}
