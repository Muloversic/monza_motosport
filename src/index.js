import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as bootstrap from 'bootstrap';
import 'normalize.css';
import './styles/main.scss';

const selectMenu = document.querySelectorAll('.dropdown-menu');
[...selectMenu].forEach((menu) => {
  const menuType = menu.getAttribute('aria-labelledby');
  menu.addEventListener('click', (e) => {
    const text = e.target.textContent;
    const targetButton = document.querySelector(`#${menuType}`);
    const defaultText = targetButton.textContent;
    targetButton.textContent = text;
    e.target.textContent = defaultText;
    targetButton.classList.add('selected');
  });
});
