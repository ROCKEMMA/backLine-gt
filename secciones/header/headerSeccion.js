import { cargarCSS } from "../../controler/cargarCss.js";

export function headerSeccion() {

  cargarCSS('secciones/header/headerSeccion.css');

  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Back<span>L</span>ine GT";

  const navToggle = document.createElement("button");
  navToggle.classList.add("nav-toggle");
  navToggle.innerHTML = "&#9776;";
  navToggle.innerHTML = '<img src="assets/ico/menu.svg">'

  const nav = document.createElement("nav");
  nav.classList.add("nav-menu");
  const navLinks = [
    "Inicio",
    "Catálogo",
    "Paquetes",
    "Calendario",
    "Contacto",
    "🇬🇹",
  ];

  navLinks.forEach((linkText) => {
    const link = document.createElement("a");
    link.href = `#${linkText.toLowerCase()}`;
    link.textContent = linkText;
    nav.appendChild(link);
  });

  // Toggle con botón hamburguesa
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que dispare el evento del document
    nav.classList.toggle("active");
  });

  // Evita que los clics dentro del nav cierren el menú
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Cerrar si se hace clic fuera del menú
  document.addEventListener("click", () => {
    nav.classList.remove("active");
  });

  header.appendChild(h1);
  header.appendChild(navToggle);
  header.appendChild(nav);

  return header;
}
