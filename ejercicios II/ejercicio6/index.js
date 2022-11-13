/**
 * 1️⃣ Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.
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

function mostrarPokemons(pokemons) {
  for (const pokemon of pokemons) {
    console.log(pokemon.nombre);
  }
}

mostrarPokemons(pokemons);

/**
 * 2️⃣ También vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.
 */

function mostrarPokemonsFuego(pokemons) {
  for (const pokemon of pokemons) {
    if (pokemon.tipo === 'fuego') {
      console.log(pokemon.nombre);
    }
  }
}

mostrarPokemonsFuego(pokemons);

// Usando filter
function mostrarPokemonsFuego2(pokemons) {
  return pokemons.filter((pokemon) => pokemon.tipo === 'fuego');
}

console.log(mostrarPokemonsFuego2(pokemons));

// Usando for of y destructuring
function mostrarPokemonsFuego3(pokemons) {
  for (const { nombre, tipo } of pokemons) {
    if (tipo === 'fuego') {
      console.log(nombre);
    }
  }
}

mostrarPokemonsFuego3(pokemons);
