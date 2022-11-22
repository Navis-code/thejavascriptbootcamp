// 1️⃣ Crea una función que reciba un array de strings y devuelva un array con las strings que empiecen por "a" o "A".

const strings = ['a', 'b', 'c', 'A', 'B', 'C'];

const empiezanPorA = (strings) =>
  strings.filter((string) => string.toLowerCase() === 'a');

console.log(empiezanPorA(strings));

// Creando función reutilizable por letras
const palabrasEmpiezanPorA = ['alba', 'bola', 'casa', 'Aguila', 'Bola', 'Casa'];
function filteredWordByLetter(word, letter) {
  return word.filter((word) => word[0].toLowerCase() === letter.toLowerCase());
}

console.log(filteredWordByLetter(palabrasEmpiezanPorA, 'a'));
