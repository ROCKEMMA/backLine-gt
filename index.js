import { headerSeccion } from './secciones/header/headerSeccion.js';
import { bannerSeccion } from './secciones/banner/bannerSeccion.js';
import { nosotrosSeccion } from './secciones/nosotros/nosotrosSeccion.js';
import { catalogoSeccion } from './secciones/catalogo/catalogoSeccion.js';
import { galeriaSeccion } from './secciones/galeria/galeriaSeccion.js';
import { contactoSeccion } from './secciones/contacto/contactoSeccion.js';
import { footerSeccion } from './secciones/footer/footerSeccion.js';

document.body.appendChild(headerSeccion());
document.body.appendChild(bannerSeccion());
document.body.appendChild(nosotrosSeccion());
document.body.appendChild(catalogoSeccion());
document.body.appendChild(galeriaSeccion());
document.body.appendChild(contactoSeccion());
document.body.appendChild(footerSeccion());