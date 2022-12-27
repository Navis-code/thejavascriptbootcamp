//  Crea una imagen con el atributo src con el valor https://via.placeholder.com/150 y el atributo alt con el valor Imagen de ejemplo.
const imgPlaceholder = 'https://via.placeholder.com/150';

const img = document.createElement('img');
img.src = imgPlaceholder;
img.alt = 'Imagen de ejemplo';

// Inserta la imagen dentro del div con la clase app.
const app = document.querySelector('.app');
app.append(img);

//  ¿Podrías insertar la imagen antes del primer párrafo? Toca investigar 🦩
const p = document.querySelector('p');
app.insertBefore(img, p);

//  ¿Podrías insertar la imagen entre los dos párrafos?
const p2 = document.querySelector('p:nth-child(2)');
app.insertBefore(img, p2);
