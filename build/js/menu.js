const menu = document.querySelector('.menu');
const menuLine = document.querySelectorAll('.menu__line');
const list = document.querySelector('.navigation__list');

menu.addEventListener('click', () => {
     for (let line of menuLine) {
          line.classList.toggle('menu__line--active')
     }
     list.classList.toggle('navigation__list--active')

})
