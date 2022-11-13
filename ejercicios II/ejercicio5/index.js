/**
 * Dado el siguiente array
 * 1️⃣ Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad
 */
const personas = [
  { nombre: 'Juan', edad: 18 },

  { nombre: 'María', edad: 16 },

  { nombre: 'Pedro', edad: 20 },

  { nombre: 'Pablo', edad: 15 },

  { nombre: 'Laura', edad: 19 },
];

function mayoresDeEdad(personas) {
  const mayores = [];
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].edad >= 18) {
      mayores.push(personas[i]);
    }
  }
  return mayores;
}

console.log(mayoresDeEdad(personas));

// Usando for of
function mayoresDeEdad4(personas) {
  const mayores = [];
  for (const persona of personas) {
    if (persona.edad >= 18) {
      mayores.push(persona);
    }
  }
  return mayores;
}

console.log(mayoresDeEdad4(personas));

// Usando método de array filter
function mayoresDeEdad2(personas) {
  return personas.filter((persona) => persona.edad >= 18);
}

console.log(mayoresDeEdad2(personas));

// Usando filter y destructuring
function mayoresDeEdad3(personas) {
  return personas.filter(({ edad }) => edad >= 18);
}

console.log(mayoresDeEdad3(personas));

/**
 * 2️⃣ Dime cual es la persona más joven del array.
 */

function masJoven(personas) {
  let masJoven = personas[0];
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad < masJoven.edad) {
      masJoven = personas[i];
    }
  }
  return masJoven;
}

console.log(masJoven(personas));

// Usando for of
function masJoven2(personas) {
  let masJoven = personas[0];
  for (const persona of personas) {
    if (persona.edad < masJoven.edad) {
      masJoven = persona;
    }
  }
  return masJoven;
}

console.log(masJoven2(personas));

// Usando método de array reduce
function masJoven3(personas) {
  return personas.reduce((masJoven, persona) => {
    if (persona.edad < masJoven.edad) {
      return persona;
    }
    return masJoven;
  });
}

console.log(masJoven3(personas));

/**
 * 3️⃣ Dime cual es la persona más mayor del array.
 */

function masMayor(personas) {
  let masMayor = personas[0];
  for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad > masMayor.edad) {
      masMayor = personas[i];
    }
  }
  return masMayor;
}

console.log(masMayor(personas));

// Usando for of
function masMayor2(personas) {
  let masMayor = personas[0];
  for (const persona of personas) {
    if (persona.edad > masMayor.edad) {
      masMayor = persona;
    }
  }
  return masMayor;
}

console.log(masMayor2(personas));

// Usando método de array reduce
function masMayor3(personas) {
  return personas.reduce((masMayor, persona) => {
    if (persona.edad > masMayor.edad) {
      return persona;
    }
    return masMayor;
  });
}

console.log(masMayor3(personas));
