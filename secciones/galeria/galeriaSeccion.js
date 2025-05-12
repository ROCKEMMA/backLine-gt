export function galeriaSeccion() {
  const section = document.createElement('section');
  section.classList.add('section');
  section.id = 'galeria';

  const h2 = document.createElement('h2');
  h2.textContent = 'Galería';

  const div = document.createElement('div');
  div.classList.add('galeria');

  const items = ['Evento RockFest 2024', 'Concierto en Teatro Nacional'];

  items.forEach(itemText => {
    const divItem = document.createElement('div');
    divItem.classList.add('card');
    divItem.textContent = itemText;
    div.appendChild(divItem);
  });

  section.appendChild(h2);
  section.appendChild(div);

  return section;
}
