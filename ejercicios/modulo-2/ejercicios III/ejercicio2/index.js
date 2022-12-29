/**
 * EJERCICIO 2
 * Software para aprender mecanografía
 * Tendrás un párrafo con un texto largo que el usuario deberá escribir.
 * Deberás controlar que el usuario escriba el texto correctamente y por cada letra que escriba bien, deberás pintarla de verde en el párrafo.
 * Crea los elementos de HTML que necesites, así como los estilos de CSS y por supuesto el código JavaScript.
 * Como consejo te diré que empieces por lo básico y vayas añadiendo funcionalidades poco a poco.
 * Cuando lo acabes puedes añadir extras como temporizador, contador de errores y por supuesto carga de palabras dinámica desde un array.
 */

const textToWrite = document.querySelector('.textToWrite');
const textWritedByUser = document.querySelector('.textWritedByUser');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const otherWordButton = document.querySelector('.otherWordButton');
const congratulations = document.querySelector('.congratulations');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  cleanAndReset();

  const textToWriteValue = textToWrite.textContent;
  const textWritedByUserValue = input.value;

  if (!textWritedByUserValue) {
    return;
  }

  const textToWriteArray = textToWriteValue.split('');
  const textWritedByUserArray = textWritedByUserValue.split('');

  checkWordByWord(textToWriteArray, textWritedByUserArray);

  if (textToWriteValue === textWritedByUserValue) {
    congratulations.classList.add('show');
  }

  form.reset();
});
function checkWordByWord(textToWriteArray, textWritedByUserArray) {
  const fragment = document.createDocumentFragment();

  textToWriteArray.forEach((letter, index) => {
    let span = document.createElement('span');
    span.textContent = textWritedByUserArray[index];

    if (letter === textWritedByUserArray[index]) {
      span.classList.add('correct');
    } else {
      span.classList.add('incorrect');
    }

    fragment.append(span);
  });
  textWritedByUser.append(fragment);
}

otherWordButton.addEventListener('click', () => {
  cleanAndReset();
  const randomWord = getRandomWord();
  textToWrite.textContent = randomWord;
});

function getRandomWord() {
  const randomPhraseArray = [
    'Hola, soy una frase aleatoria',
    'Adiós, soy otra frase aleatoria',
    'Casa de papel',
    'Coche de carreras automático',
    'Perro, perrito, perruno',
    'Gato callejero que se come ratones',
    'Ordenador portátil de 15 pulgadas',
  ];
  const randomIndex = Math.floor(Math.random() * randomPhraseArray.length);
  return randomPhraseArray[randomIndex];
}

function cleanAndReset() {
  textWritedByUser.innerHTML = '';
  congratulations.classList.remove('show');
}
