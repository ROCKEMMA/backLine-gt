import { cargarCSS } from "../../controler/cargarCss.js";

export function nosotrosSeccion() {

  cargarCSS('secciones/nosotros/nosotrosSeccion.css');

  const section = document.createElement('section');
  section.className ='section-nosotros';

  const h2 = document.createElement('h2');
  h2.textContent = "Conócenos";
  section.appendChild(h2);

  const p = document.createElement('p');
  p.textContent =
    "En BackLine GT facilitamos la experiencia musical brindando en alquiler instrumentos y equipos de sonido listos para usarse. Nos encargamos de llevar, instalar y recoger el equipo en el lugar del evento, asegurando que todo esté preparado para que tu presentación suene como debe.";
    section.appendChild(p);


  return section;
}
