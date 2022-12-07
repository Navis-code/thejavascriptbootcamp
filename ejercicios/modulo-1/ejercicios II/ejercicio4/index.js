// Crea una función que reciba un número y muestre por consola si es par o impar.

function parImpar(numero) {
  if (numero % 2 === 0) {
    return 'par';
  }
  return 'impar';
}

// Par o impar usando operador ternario
function parImparTernary(numero) {
  return numero % 2 === 0 ? 'par' : 'impar';
}

console.log(parImpar(5));

console.log(parImparTernary(5));
