export function nosotrosSeccion() {
  const section = document.createElement('section');
  section.classList.add('section');
  section.id = 'nosotros';

  const h2 = document.createElement('h2');
  h2.textContent = 'Sobre Nosotros';

  const p = document.createElement('p');
  p.textContent = 'Con años de experiencia en la industria musical, en BackLine GT ofrecemos equipos de primer nivel para conciertos, grabaciones y ensayos. Nos comprometemos con la calidad, puntualidad y profesionalismo.';

  section.appendChild(h2);
  section.appendChild(p);

  return section;
}
