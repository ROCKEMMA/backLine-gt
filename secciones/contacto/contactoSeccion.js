export function contactoSeccion() {
  const section = document.createElement('section');
  section.classList.add('section');
  section.classList.add('contacto');
  section.id = 'contacto';

  const h2 = document.createElement('h2');
  h2.textContent = 'Contacto';

  const form = document.createElement('form');

  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.placeholder = 'Nombre';

  const inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Correo electrónico';

  const textarea = document.createElement('textarea');
  textarea.placeholder = 'Mensaje o solicitud de cotización';

  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Enviar';

  form.appendChild(inputName);
  form.appendChild(inputEmail);
  form.appendChild(textarea);
  form.appendChild(button);

  section.appendChild(h2);
  section.appendChild(form);

  return section;
}
