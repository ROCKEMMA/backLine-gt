import { cargarCSS } from "../../controler/cargarCss.js";

export function footerSeccion() {

  cargarCSS('secciones/footer/footerSeccion.css');

  const footer = document.createElement('footer');

  const p1 = document.createElement('p');
  p1.textContent = 'BackLine GT - Ciudad de Guatemala';
  footer.appendChild(p1);

  const p2 = document.createElement('p');
  p2.textContent = 'Whatsapp: +502 XXX XXX XXX | backlinegt@email.com';
  footer.appendChild(p2);

  const p3 = document.createElement('p');
  p3.innerHTML = '&copy; 2025 Todos los derechos reservados';
  footer.appendChild(p3);

  return footer;
}
