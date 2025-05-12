export function bannerSeccion() {
  const section = document.createElement('section');
  section.classList.add('banner');

  const h1 = document.createElement('h1');
  h1.textContent = 'Renta profesional de instrumentos y equipo de Backline';

  const p = document.createElement('p');
  p.textContent = 'Tu música suena mejor con el equipo correcto';

  const button = document.createElement('button');
  button.textContent = 'Ver Catálogo';

  section.appendChild(h1);
  section.appendChild(p);
  section.appendChild(button);

  return section;
}
