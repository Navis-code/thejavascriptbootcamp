/**
 * 1️⃣ Crea una función que reciba un array de nombres que le han dado like a una foto, e indica por consola quien ha dado like. En los siguientes formatos:
 * 
 * Si nadie ha dado like
 const likes = [];
 
 'Nadie ha dado like'
 
 * Si solo ha dado like una persona
  const likes = ['Juan'];

  'Juan ha dado like'

 * Si han dado like dos personas

  const likes = ['Juan', 'María'];

  'Juan y María han dado like'

 * Si han dado like tres personas

  const likes = ['Juan', 'María', 'Pedro'];

 'Juan, María y Pedro han dado like'

 * Si han dado like más de tres personas

  const likes = ['Juan', 'María', 'Pedro', 'Pablo', 'Laura'];

  'Juan, María y 3 personas más han dado like'
  *
  */

// Usando destructuring
function whoLikes(names) {
  let singularEndMessage = 'ha dado like';
  let pluralEndMessage = 'han dado like';

  const [first, second, third, rest] = names;

  if (!first) return `Nadie ${singularEndMessage}`;
  if (!second) return `${first} ${singularEndMessage}`;
  if (!third) return `${first} y ${second} ${pluralEndMessage}`;
  if (!rest) return `${first}, ${second} y ${third} ${pluralEndMessage}`;
  if (rest)
    return `${first}, ${second} y ${
      names.length - 2
    } personas más ${pluralEndMessage}`;
}

console.log(whoLikes([]));
console.log(whoLikes(['Juan']));
console.log(whoLikes(['Juan', 'María']));
console.log(whoLikes(['Juan', 'María', 'Pedro']));
console.log(whoLikes(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']));

// Usando if else
function whoLikes2(names) {
  if (names.length === 0) {
    return 'Nadie ha dado like';
  } else if (names.length === 1) {
    return `${names[0]} ha dado like`;
  } else if (names.length === 2) {
    return `${names[0]} y ${names[1]} han dado like`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} y ${names[2]} han dado like`;
  } else {
    return `${names[0]}, ${names[1]} y ${
      names.length - 2
    } personas más han dado like`;
  }
}

console.log(whoLikes2([]));
console.log(whoLikes2(['Juan']));
console.log(whoLikes2(['Juan', 'María']));
console.log(whoLikes2(['Juan', 'María', 'Pedro']));
console.log(whoLikes2(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']));

// usando lookup table
const whoLikes3 = (names) => {
  const lookup = {
    0: 'Nadie ha dado like',
    1: `${names[0]} ha dado like`,
    2: `${names[0]} y ${names[1]} han dado like`,
    3: `${names[0]}, ${names[1]} y ${names[2]} han dado like`,
    4: `${names[0]}, ${names[1]} y ${
      names.length - 2
    } personas más han dado like`,
  };

  return lookup[names.length] || lookup[4];
};

console.log(whoLikes3([]));
console.log(whoLikes3(['Juan']));
console.log(whoLikes3(['Juan', 'María']));
console.log(whoLikes3(['Juan', 'María', 'Pedro']));
console.log(whoLikes3(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']));

// Usando switch
function whoLikes4(names) {
  switch (names.length) {
    case 0:
      return 'Nadie ha dado like';
    case 1:
      return `${names[0]} ha dado like`;
    case 2:
      return `${names[0]} y ${names[1]} han dado like`;
    case 3:
      return `${names[0]}, ${names[1]} y ${names[2]} han dado like`;
    default:
      return `${names[0]}, ${names[1]} y ${
        names.length - 2
      } personas más han dado like`;
  }
}

console.log(whoLikes4([]));
console.log(whoLikes4(['Juan']));
console.log(whoLikes4(['Juan', 'María']));
console.log(whoLikes4(['Juan', 'María', 'Pedro']));
console.log(whoLikes4(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']));
