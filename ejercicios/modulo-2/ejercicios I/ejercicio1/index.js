// 1️⃣ Muestra en la consola el texto de cada uno de los párrafos.

const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
  console.log(paragraphs[i].textContent);
}

// con foreach
paragraphs.forEach((paragraph) => {
  console.log(paragraph.textContent);
});

// con for of
for (const paragraph of paragraphs) {
  console.log(paragraph.textContent);
}

// 2️⃣ Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.

const paragraphsClass = document.querySelectorAll('.parrafo');

for (let i = 0; i < paragraphsClass.length; i++) {
  console.log(paragraphsClass[i].textContent);
}

// con foreach
paragraphsClass.forEach((paragraph) => {
  console.log(paragraph.textContent);
});

// con for of
for (const paragraph of paragraphsClass) {
  console.log(paragraph.textContent);
}

// 3️⃣ Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".

for (let i = 0; i < paragraphsClass.length; i++) {
  paragraphsClass[i].textContent = 'Hola Mundo';
}

// con foreach
paragraphsClass.forEach((paragraph) => {
  paragraph.textContent = 'Hola Mundo';
});

// con for of
for (const paragraph of paragraphsClass) {
  paragraph.textContent = 'Hola Mundo';
}

// 4️⃣ Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.

for (let i = 0; i < paragraphsClass.length; i++) {
  paragraphsClass[i].style.backgroundColor = 'red';
}

// con foreach y cssText
paragraphsClass.forEach((paragraph) => {
  paragraph.style.cssText = 'background-color: red';
});

// con for of y cssText
for (const paragraph of paragraphsClass) {
  paragraph.style.cssText = 'background-color: red';
}

// 5️⃣ Añade un span con el texto "Infiltrado" al final de cada uno de los párrafos que tengan la clase parrafo

for (let i = 0; i < paragraphsClass.length; i++) {
  paragraphsClass[i].innerHTML += '<span>Infiltrado</span>';
}

// con foreach y createElement
paragraphsClass.forEach((paragraph) => {
  const span = document.createElement('span');
  span.textContent = 'Infiltrado';
  paragraph.appendChild(span);
});

// con for of y createElement
for (const paragraph of paragraphsClass) {
  const span = document.createElement('span');
  span.textContent = 'Infiltrado';
  paragraph.appendChild(span);
}
