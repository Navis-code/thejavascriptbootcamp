/**
 * Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
 * Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.
 */

// Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.
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

// Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.

// SOLUCIÓN SIN BUCLES
if (pokemons[0].tipo === 'fuego') {
  console.log('¡Es un pokemon de fuego! 🔥');
} else if (pokemons[1].tipo === 'fuego') {
  console.log('¡Es un pokemon de fuego! 🔥');
} else if (pokemons[2].tipo === 'fuego') {
  console.log('¡Es un pokemon de fuego! 🔥');
}

// SOLUCIÓNES CON BUCLES:
for (let index = 0; index < pokemons.length; index++) {
  const pokemon = pokemons[index];
  if (pokemon.tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
  }
}

pokemons.forEach((pokemon) => {
  if (pokemon.tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
  }
});

for (const pokemon of pokemons) {
  if (pokemon.tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
  }
}

// SOLUCIÓN CON BUCLE Y DESTRUCTURING
pokemons.forEach(({ tipo }) => {
  if (tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
  }
});

for (const { tipo } of pokemons) {
  if (tipo === 'fuego') {
    console.log('¡Es un pokemon de fuego! 🔥');
  }
}

// SOLUCIÓN CON BUCLE Y DESTRUCTURING Y CONDICIONAL TERNARIA
pokemons.forEach(({ tipo }) => {
  tipo === 'fuego' ? console.log('¡Es un pokemon de fuego! 🔥') : null;
});

for (const { tipo } of pokemons) {
  tipo === 'fuego' ? console.log('¡Es un pokemon de fuego! 🔥') : null;
}

// SOLUCIÓN CON BUCLE Y DESTRUCTURING Y CONDICIONAL TERNARIA Y CONDICIONAL AND
pokemons.forEach(({ tipo }) => {
  tipo === 'fuego' && console.log('¡Es un pokemon de fuego! 🔥');
});

for (const { tipo } of pokemons) {
  tipo === 'fuego' && console.log('¡Es un pokemon de fuego! 🔥');
}

// SOLUCION EN UNA LINEA
pokemons.forEach(({ tipo }) => tipo === 'fuego' && console.log('¡Es un pokemon de fuego! 🔥'));