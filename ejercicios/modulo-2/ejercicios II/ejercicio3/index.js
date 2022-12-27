const users = [
  {
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    img: 'https://randomuser.me/api/portraits/men/38.jpg',
  },
  {
    name: 'Jane Doe',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    img: 'https://randomuser.me/api/portraits/women/74.jpg',
  },
  {
    name: 'John Smith',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Jane Smith',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
    img: 'https://randomuser.me/api/portraits/women/92.jpg',
  },
];

// Crea una card para cada usuario, según el template del HTML
// Como atributo alt de la imagen, quiero que se le añada el nombre del usuario.
// Puedes usar los estilos que están en el template o crear tus propios estilos. Además organiza el código CSS como creas conveniente.
const app = document.querySelector('.app');
const templateCard = document.querySelector('#cardTemplate').content;
const fragment = document.createDocumentFragment();

users.forEach((user) => {
  const clone = templateCard.cloneNode(true);
  const card = clone.querySelector('.card');
  const img = card.querySelector('img');
  img.src = user.img;
  img.alt = user.name;
  card.querySelector('h2').textContent = user.name;
  card.querySelector('p').textContent = user.description;
  fragment.append(card);
});

app.append(fragment);
