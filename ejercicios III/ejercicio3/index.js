/**
 *
 * 1️⃣ Crea una función que permita comprobar si un string es un palíndromo.
 * Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
 *
 */

const esPalindromo = (string) => {
  const stringSinEspacios = string.split(' ').join('');
  const stringRevere = stringSinEspacios.split('').reverse().join('');
  return stringSinEspacios === stringRevere;
};

console.log(esPalindromo('anita lava la tina'));
console.log(esPalindromo('anita lava la tinaa'));

/**
 *
 * 2️⃣ Ahora haz la misma comprobación pero con un array de strings.
 *
 */

const esPalindromoArray = (arrayToCheck) => {
  const arraySinEspacios = arrayToCheck.map((string) =>
    string.split(' ').join('')
  );
  const arrayReverse = arraySinEspacios.map((string) =>
    string.split('').reverse().join('')
  );
  return arraySinEspacios.map((string, index) => {
    return {
      string: arrayToCheck[index],
      esPalindromo: string === arrayReverse[index],
    };
  });
};

const arrayPalindromo = ['anita lava la tina', 'anita lava la tinaa'];

console.log(esPalindromoArray(arrayPalindromo));
