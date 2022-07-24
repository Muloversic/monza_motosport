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

const sortButton = document.querySelector('.main-sort-btn');
const menuCarSpecs = document.querySelector('.menu-car-specs');
menuCarSpecs.addEventListener('click', (e) => {
  const sortType = e.target.getAttribute('data-sort');
  const menuId = menuCarSpecs.getAttribute('aria-labelledby');
  const targetButton = document.querySelector(`#${menuId}`);
  const buttonAttr = targetButton.getAttribute('data-sort');
  e.target.setAttribute('data-sort', buttonAttr);
  targetButton.setAttribute('data-sort', sortType);
  if (sortType === 'ascending') {
    sortButton.classList.add('sort-ascending');
    sortButton.classList.remove('sort-descending');
  }

  if (sortType === 'descending') {
    sortButton.classList.add('sort-descending');
    sortButton.classList.remove('sort-ascending');
  }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

const collapses = document.querySelectorAll('.questions-collaps-item');
[...collapses].forEach((collapseElement) =>
  collapseElement.addEventListener('click', () => collapseElement.classList.toggle('show'))
);
