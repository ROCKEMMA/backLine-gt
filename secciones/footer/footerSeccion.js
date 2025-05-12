export function footerSeccion() {
  const footer = document.createElement('footer');

  const p1 = document.createElement('p');
  p1.textContent = 'BackLine GT - Ciudad de Guatemala';

  const p2 = document.createElement('p');
  p2.textContent = 'Whatsapp: +502 XXX XXX XXX | backlinegt@email.com';

  const p3 = document.createElement('p');
  p3.innerHTML = '&copy; 2025 Todos los derechos reservados';

  footer.appendChild(p1);
  footer.appendChild(p2);
  footer.appendChild(p3);

  return footer;
}
