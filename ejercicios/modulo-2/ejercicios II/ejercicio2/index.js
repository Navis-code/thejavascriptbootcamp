const animals = [
  { name: 'Lion King', isCarnivore: true },
  { name: 'Plant', isCarnivore: false },
  { name: 'Ant', isCarnivore: true },
  { name: 'Bee', isCarnivore: true },
  { name: 'Mouse', isCarnivore: true },
];

// Crea 2 listas, una para carnívoros y otra para herbívoros.
// Intenta evitar el reflow a la hora de añadir elementos a las listas.
// Quiero que se le añada la clase carnivore a los carnívoros y la clase herbivore a los herbívoros.
// A los carnívoros quiero que se les añada un emoji 🍖 y a los herbívoros🌱. Al final de cada nombre.

const app = document.querySelector('.app');

const carnivoresList = document.createElement('ul');
const herbivoresList = document.createElement('ul');

function createCarnivoreLi({ name }) {
  const li = document.createElement('li');
  li.classList.add('carnivore');
  li.textContent = `${name} 🍖`;

  return li;
}

function createHerbivoreLi({ name }) {
  const li = document.createElement('li');
  li.classList.add('herbivore');
  li.textContent = `${name} 🌱`;

  return li;
}

animals.forEach((animal) => {
  if (animal.isCarnivore) {
    const carnivoreLi = createCarnivoreLi(animal);
    carnivoresList.append(carnivoreLi);
  } else {
    const herbivoreLi = createHerbivoreLi(animal);
    herbivoresList.append(herbivoreLi);
  }
});

app.append(carnivoresList, herbivoresList);
