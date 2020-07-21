// Header menu button

let burgers = document.querySelectorAll('.nav-burger');
let burgerButtons = document.querySelectorAll('.nav-burger-button');
let burgerMenu = document.querySelector('.main-nav');

for (burger of burgers) {
	burger.onclick = () => {
		for (burgerButton of burgerButtons) {
			burgerButton.classList.toggle('nav-burger-button_active');
			burger.classList.toggle('nav-burger_active');
		}
		document.querySelector('.header').classList.toggle('header_active');
			burgerMenu.classList.toggle('main-nav_active');
	}
}

// Offer menu 

let offerButton = document.querySelector('.offer-frame__button');
let offerForm = document.querySelector('.offer-form-wrapper');
let offerFormBurgerButton = document.querySelector('.offer-form__nav-burger');

offerButton.onclick = () => {
	offerForm.classList.toggle('offer-form-wrapper_active');
}

offerFormBurgerButton.onclick = () => {
	offerForm.classList.toggle('offer-form-wrapper_active');
}

// Sroll down arrow

let arrowDown = document.querySelector('.arrow-down');

arrowDown.onclick = () => {
	document.querySelector('.services-frame').scrollIntoView({behavior: "smooth"});
}