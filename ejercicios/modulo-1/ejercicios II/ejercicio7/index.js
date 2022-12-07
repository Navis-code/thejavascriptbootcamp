/**
 * Haz los ejercicios anteriores con funciones flecha.
 */

// 1️⃣ Crea una función que reciba un número y devuelva el doble de ese número.

const doble = (numero) => numero * 2;

console.log(doble(5));

// 2️⃣ Crea una función que reciba un número y devuelva el cuadrado de ese número.

const cuadrado = (numero) => numero * numero;

console.log(cuadrado(5));

// 3️⃣ Crea una función que calcule el área de un rectángulo y la muestre por consola.

const areaRectangulo = (base, altura) => base * altura;

console.log(areaRectangulo(5, 10));

// 4️⃣ Crea una función que reciba un número y muestre por consola si es par o impar.

const parImpar = (numero) => (numero % 2 === 0 ? 'par' : 'impar');

console.log(parImpar(5));

/**
 * 5️⃣ Dado el siguiente Array
 * 
 * const personas = [
  { nombre: 'Juan', edad: 18 },

  { nombre: 'María', edad: 16 },

  { nombre: 'Pedro', edad: 20 },

  { nombre: 'Pablo', edad: 15 },

  { nombre: 'Laura', edad: 19 },
];
 *
    * Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad 
 */

const personas = [
  { nombre: 'Juan', edad: 18 },

  { nombre: 'María', edad: 16 },

  { nombre: 'Pedro', edad: 20 },

  { nombre: 'Pablo', edad: 15 },

  { nombre: 'Laura', edad: 19 },
];

const mayoresDeEdad = (personas) =>
  personas.filter((persona) => persona.edad >= 18);

console.log(mayoresDeEdad(personas));

// Dime cual es la persona más joven del array
const masJoven = (personas) =>
  personas.reduce((personaAnterior, personaActual) =>
    personaAnterior.edad < personaActual.edad ? personaAnterior : personaActual
  );

console.log(masJoven(personas));

// Usando arrow functions y for of
const masJoven2 = (personas) => {
  let masJoven = personas[0];
  for (const persona of personas) {
    if (persona.edad < masJoven.edad) {
      masJoven = persona;
    }
  }
  return masJoven;
};

console.log(masJoven2(personas));

// Dime cual es la persona más vieja del array
const masViejo = (personas) =>
  personas.reduce((personaAnterior, personaActual) =>
    personaAnterior.edad > personaActual.edad ? personaAnterior : personaActual
  );

console.log(masViejo(personas));

// Usando arrow functions y for of
const masViejo2 = (personas) => {
  let masViejo = personas[0];
  for (const persona of personas) {
    if (persona.edad > masViejo.edad) {
      masViejo = persona;
    }
  }
  return masViejo;
};

console.log(masViejo2(personas));

/**
 * 6️⃣ Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.
 */

const pokemons = [
  {
    nombre: 'Squirtle',
    tipo: 'agua',
  },
  {
    nombre: 'Bulbasaur',
    tipo: 'planta',
  },
  {
    nombre: 'Charmander',
    tipo: 'fuego',
  },
];

const mostrarPokemons = (pokemons) => {
  for (const pokemon of pokemons) {
    console.log(pokemon.nombre);
  }
};

mostrarPokemons(pokemons);

// ambién vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.

const mostrarPokemonsFuego = (pokemons) => {
  for (const pokemon of pokemons) {
    if (pokemon.tipo === 'fuego') {
      console.log(pokemon.nombre);
    }
  }
};

mostrarPokemonsFuego(pokemons);
