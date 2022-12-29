const button = document.querySelector('.btn');
const colorContainer = document.querySelector('.color-container');
const colorCode = document.querySelector('.color-code');

const addRandomColor = (event) => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorContainer.style.backgroundColor = randomColor;

  colorCode.textContent = randomColor;
};

button.addEventListener('click', addRandomColor);
