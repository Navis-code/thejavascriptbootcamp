// Crea un cuadrado de 100x100px con el color de fondo red y el color de texto white con el texto Soy un cuadrado en el centro.

const app = document.querySelector('.app');

const square = document.createElement('div');

square.classList.add('square');

square.textContent = 'Soy un cuadrado';

app.appendChild(square);

// 1️⃣ Cada vez que se recargue la página el cuadrado debe tener un color de fondo aleatorio de entre los siguientes: red, green, blue, yellow, pink, purple, orange.

const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

square.style.backgroundColor = randomColor;

// 2️⃣ Si el color de fondo es red, green o blue el tamaño del cuadrado debe ser de 100x100px, si es yellow, pink o purple el tamaño del cuadrado debe ser de 200x200px y si es orange el tamaño del cuadrado debe ser de 300x300px

// First approach:

if (
  randomColor === 'red' ||
  randomColor === 'green' ||
  randomColor === 'blue'
) {
  square.style.width = '100px';
  square.style.height = '100px';
} else if (
  randomColor === 'yellow' ||
  randomColor === 'pink' ||
  randomColor === 'purple'
) {
  square.style.width = '200px';
  square.style.height = '200px';
} else {
  square.style.width = '300px';
  square.style.height = '300px';
}

// Second approach:  Con lookup table
const lookUpWidthHeight = {
  red: '100px',
  green: '100px',
  blue: '100px',
  yellow: '200px',
  pink: '200px',
  purple: '200px',
  orange: '300px',
};

square.style.width = lookUpWidthHeight[randomColor];
square.style.height = lookUpWidthHeight[randomColor];

// Third approach:  Con lookup + css class
const lookUpSizes = {
  red: 'small',
  green: 'small',
  blue: 'small',
  yellow: 'medium',
  pink: 'medium',
  purple: 'medium',
  orange: 'large',
};

square.classList.add(lookUpSizes[randomColor]);
