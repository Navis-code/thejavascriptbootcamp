/**
 * 1️⃣ Crea una función que reciba un array de strings y devuelva un array con las strings ordenadas alfabéticamente de menor a mayor.
 */

const strings = ['a', 'b', 'c', 'A', 'B', 'C'];

const ordenadasAlfabeticamente = (strings) => strings.sort();

console.log(ordenadasAlfabeticamente(strings));

// teniendo en cuenta mayúsculas, minúsculas y acentos
const strings2 = ['a', 'b', 'c', 'A', 'B', 'C', 'á', 'é', 'í', 'ó', 'ú'];

const ordenadasAlfabeticamente2 = (strings) =>
  strings.sort((a, b) => a.localeCompare(b));

console.log(ordenadasAlfabeticamente2(strings2));

/**
 * 2️⃣ Dado el siguiente array de numeros, crea una función que devuelva un array sin los números duplicados.
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const sinDuplicados = (numbers) => [...new Set(numbers)];

console.log(sinDuplicados(numbers));

// sin duplicados usando filter
const sinDuplicados2 = (numbers) =>
  numbers.filter((number, index) => numbers.indexOf(number) === index);

console.log(sinDuplicados2(numbers));

// sin duplicados usando for
const sinDuplicados3 = (numbers) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (result.indexOf(numbers[i]) === -1) {
      result.push(numbers[i]);
    }
  }
  return result;
};

console.log(sinDuplicados3(numbers));

/**
 * 3️⃣ Dado el siguiente array de objetos, crea una función que devuelva un array sin los objetos duplicados
 */
const users = [
  {
    name: 'Juan',
    age: 25,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'María',
    age: 30,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pedro',
    age: 20,
    city: 'Madrid',
    hobbies: ['fútbol', 'programar'],
  },
  {
    name: 'Laura',
    age: 35,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pablo',
    age: 27,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'Juan', // duplicado
    age: 25,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'María', // duplicado
    age: 30,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pedro', // duplicado
    age: 20,
    city: 'Madrid',
    hobbies: ['fútbol', 'programar'],
  },
  {
    name: 'Laura', // duplicado
    age: 35,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pablo',
    age: 35,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
];

const uniques = [...new Set(users.map((user) => JSON.stringify(user)))];
const sinDuplicados4 = (users) => uniques.map((user) => JSON.parse(user));

console.log(sinDuplicados4(users));

// sin duplicados usando filter
const sinDuplicados5 = (users) =>
  users.filter((user, index) => {
    const userString = JSON.stringify(user);
    return (
      users.findIndex((user) => JSON.stringify(user) === userString) === index
    );
  });

console.log(sinDuplicados5(users));

// sin duplicados usando for
const sinDuplicados6 = (users) => {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    const userString = JSON.stringify(users[i]);
    if (
      result.findIndex((user) => JSON.stringify(user) === userString) === -1
    ) {
      result.push(users[i]);
    }
  }
  return result;
};

console.log(sinDuplicados6(users));
