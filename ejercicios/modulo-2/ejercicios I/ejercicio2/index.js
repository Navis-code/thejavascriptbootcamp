const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

//1️⃣ Crea una lista no ordenada con el nombre de cada usuario.

const app = document.querySelector('.app');

const ul = document.createElement('ul');

for (const { name, isPremium } of users) {
  const li = document.createElement('li');
  li.textContent = name;
  li.dataset.premium = isPremium; //data-attribute para identificar a los usuarios premium
  ul.appendChild(li);
}

app.appendChild(ul);

//2️⃣ Resalta con el background-color gold a los usuarios premium.

const lis = document.querySelectorAll('li');

for (const li of lis) {
  if (li.dataset.premium === 'true') {
    li.classList.add('premium');
  }
}

//3️⃣ Añade también el atributo title con el valor Usuario premium a los usuarios premium.
const titleForPremium = 'Usuario premium';

for (const li of lis) {
  if (li.dataset.premium === 'true') {
    li.title = titleForPremium;
  }
}
