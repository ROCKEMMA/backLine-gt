import { cargarCSS } from "../../controler/cargarCss.js";

export function bannerSeccion() {

  cargarCSS("secciones/banner/bannerSeccion.css");

  const section = document.createElement("section");
  section.classList.add("banner");

  const overlay = document.createElement("div");
  overlay.classList.add("banner-overlay");

  const container = document.createElement("div");
  container.classList.add("banner-container");

  const h1 = document.createElement("h1");
  h1.textContent = "Renta profesional de instrumentos y equipo de Backline";

  const h3 = document.createElement("h3");
  h3.textContent = "Tu música suena mejor con el equipo correcto";

  const button = document.createElement("button");
  button.textContent = "Ver Catálogo";

  container.appendChild(h1);
  container.appendChild(h3);
  container.appendChild(button);

  overlay.appendChild(container);
  section.appendChild(overlay);

  return section;
}
