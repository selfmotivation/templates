let burgerButton = document.querySelector('.header__nav-burger');
let burgerMenu = document.querySelector('.main-nav');

burgerButton.onclick = () => {
	document.querySelector('.header__nav-burger-button').classList.toggle('header__nav-burger-button_active');
	burgerButton.classList.toggle('header__nav-burger_active');
	document.querySelector('.header').classList.toggle('header_active');
	burgerMenu.classList.toggle('main-nav_active');
}