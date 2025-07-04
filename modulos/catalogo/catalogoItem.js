import { cargarCSS } from "../../controler/cargarCss.js";

export function itemInstrumento(item) {

    cargarCSS('modulos/catalogo/catalogoItem.css');
    
    const divItem = document.createElement("div");
    divItem.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = item.título;
    divItem.appendChild(titulo);

    const categoria = document.createElement("p");
    categoria.textContent = item.categoria;
    categoria.className="categoria";
    divItem.appendChild(categoria);

    const divImg = document.createElement('div');
    divImg.className = "div-img";

        const imagen = document.createElement("img");
        imagen.src = item.img;
        imagen.alt = item.título;
        divImg.appendChild(imagen);
    divItem.appendChild(divImg);

    const descripcion = document.createElement("p");
    descripcion.textContent = item.descripción;
    divItem.appendChild(descripcion);

    const precio = document.createElement("span");
    precio.className = "precio-tiempo";
    precio.textContent = `Q${item.precio}/hora`;
    divItem.appendChild(precio);

    const tiempo = document.createElement("span");
    tiempo.className = "tiempo-disponible";
    tiempo.textContent = item.tiempoUso;

    divItem.appendChild(tiempo);

    return divItem;
}