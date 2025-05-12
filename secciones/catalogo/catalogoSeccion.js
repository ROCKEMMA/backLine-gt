export function catalogoSeccion() {
  const section = document.createElement('section');
  section.classList.add('section');
  section.id = 'catalogo';

  const h2 = document.createElement('h2');
  h2.textContent = 'Catálogo de Equipos';

  const div = document.createElement('div');
  div.classList.add('catalogo');

  const items = ['Guitarra Fender Stratocaster', 'Batería Pearl Export', 'Amplificador Marshall JCM800'];
  
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
