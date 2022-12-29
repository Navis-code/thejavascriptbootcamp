/**
 * EJERCICIO 1
 *  Crea un formulario con un input de tipo text y un botón de tipo submit..
 *  Crea un párrafo vacío debajo del formulario.
 *  Al hacer click en el botón submit, pinta en el párrafo el texto que hay en el input.
 *  Si el texto del input es menor de 5 caracteres, pinta el texto en rojo.
 *  Al hacer click en el botón submit, vacía el input.
 */
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const paragraph = document.querySelector('.paragraph');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  paragraph.textContent = input.value;
  const isInputShort = input.value.length < 5;

  isInputShort
    ? paragraph.classList.add('short-paragraph')
    : paragraph.classList.remove('short-paragraph');

  form.reset();
});
