/**
 * 1️⃣ Dado el siguiente array de objetos:
 * ...
 * Crea una función que devuelva un array con los nombres de las personas que viven en Madrid.
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
];

function getNamesOfPeopleLivingInMadrid(users) {
  return users
    .filter((user) => user.city === 'Madrid')
    .map((user) => user.name);
}

console.log(getNamesOfPeopleLivingInMadrid(users));

// funcion flecha
const getNamesOfPeopleLivingInMadrarrow = (users) => {
  return users
    .filter((user) => user.city === 'Madrid')
    .map((user) => user.name);
};

console.log(getNamesOfPeopleLivingInMadrarrow(users));

/**
 * 2️⃣ Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.
 */

function getNamesOfPeopleOver25(users) {
  return users.filter((user) => user.age > 25).map((user) => user.name);
}

console.log(getNamesOfPeopleOver25(users));

// funcion flecha
const getNamesOfPeopleOver25arrow = (users) =>
  users.filter((user) => user.age > 25).map((user) => user.name);

console.log(getNamesOfPeopleOver25arrow(users));

/**
 * 3️⃣ Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.
 */

function getNamesOfPeopleOver25LivingInMadrid(users) {
  return users
    .filter((user) => user.age > 25 && user.city === 'Madrid')
    .map((user) => user.name);
}

console.log(getNamesOfPeopleOver25LivingInMadrid(users));

// funcion flecha
const getNamesOfPeopleOver25LivingInMadridarrow = (users) =>
  users
    .filter((user) => user.age > 25 && user.city === 'Madrid')
    .map((user) => user.name);

console.log(getNamesOfPeopleOver25LivingInMadridarrow(users));

/**
 * 4️⃣ Encuentra la primera persona que le guste programar.
 */

function getFirstPersonWhoLikesProgramming(users) {
  return users.find((user) => user.hobbies.includes('programar'));
}

console.log(getFirstPersonWhoLikesProgramming(users));

// funcion flecha
const getFirstPersonWhoLikesProgrammingarrow = (users) =>
  users.find((user) => user.hobbies.includes('programar'));

console.log(getFirstPersonWhoLikesProgrammingarrow(users));

/**
 * 5️⃣ Haz la suma de todas las edades de las personas.
 */

// sin usar reduce
function getSumOfAllAgesWithoutReduce(users) {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum += users[i].age;
  }
  return sum;
}

console.log(getSumOfAllAges(users));

// usando reduce
function getSumOfAllAges(users) {
  return users.reduce((acc, user) => acc + user.age, 0);
}

console.log(getSumOfAllAges(users));

// funcion flecha
const getSumOfAllAgesarrow = (users) =>
  users.reduce((acc, user) => acc + user.age, 0);

console.log(getSumOfAllAgesarrow(users));

/**
 * 6️⃣ Crea un nuevo array solo con la ciudad de cada persona y su primer hobby. La estructura del array debe ser:
 * [
  {
    city: 'Madrid',
    hobby: 'fútbol',
  },
  {
    city: 'Barcelona',
    hobby: 'pintar',
  },
  // ...
]
 */

function getCityAndFirstHobby(users) {
  return users.map((user) => {
    return {
      city: user.city,
      hobby: user.hobbies[0],
    };
  });
}

console.log(getCityAndFirstHobby(users));

// funcion flecha
const getCityAndFirstHobbyarrow = (users) =>
  users.map((user) => {
    return {
      city: user.city,
      hobby: user.hobbies[0],
    };
  });

console.log(getCityAndFirstHobbyarrow(users));
