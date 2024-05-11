// скрипт для открытия/закрытия бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelector('.menu-items');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('active');
  menuItems.classList.toggle('active');
});