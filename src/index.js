import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as bootstrap from 'bootstrap';
import 'normalize.css';
import './styles/main.scss';


const yearMenu = document.querySelectorAll('.dropdown-menu');
[...yearMenu].forEach((menu) => {
  const menuType = menu.getAttribute('aria-labelledby');
  menu.addEventListener('click', (e) => {
    const text = e.target.textContent;
    const targetButton = document.querySelector(`#${menuType}`);
    targetButton.textContent = text;
  });
});
