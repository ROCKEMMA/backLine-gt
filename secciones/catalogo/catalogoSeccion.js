import { cargarCSS } from "../../controler/cargarCss.js";
import { instrumentos } from "../../data/instrumento.js";
import { itemInstrumento } from "../../modulos/catalogo/catalogoItem.js";

export function catalogoSeccion() {

  cargarCSS("secciones/catalogo/catalogoSeccion.css");

  const section = document.createElement("section");
  section.classList.add("section-catalogo");
  section.id = "catalogo";

  const h2 = document.createElement("h2");
  h2.textContent = "Equipos destacados";
  const div = document.createElement("div");
  div.classList.add("catalogo");

  instrumentos.forEach((item) => {
    console.log(item);
    div.appendChild(itemInstrumento(item));
  });

  section.appendChild(h2);
  section.appendChild(div);

  return section;
}
