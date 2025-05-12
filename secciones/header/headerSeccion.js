export function headerSeccion() {
  const header = document.createElement('header');
  
  const h1 = document.createElement('h1');
  h1.textContent = 'BackLine GT';
  
  const nav = document.createElement('nav');
  const navLinks = ['Catálogo', 'Paquetes', 'Galería', 'Testimonios', 'Contacto'];
  
  navLinks.forEach(linkText => {
    const link = document.createElement('a');
    link.href = `#${linkText.toLowerCase()}`;
    link.textContent = linkText;
    nav.appendChild(link);
  });
  
  header.appendChild(h1);
  header.appendChild(nav);
  
  return header;
}