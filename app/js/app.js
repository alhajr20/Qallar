import slider from './modules/slider';
import menu from './modules/menu';

document.addEventListener('DOMContentLoaded', () => {

	const headerSection = document.querySelector('.header__navWrapper');

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            headerSection.classList.add('wrapper-active');
        } else {
            headerSection.classList.remove('wrapper-active');
        };
    });

    const headerCart = document.querySelector('.header__cart'),
          basketClose = document.querySelector('.basket-close'),
          basket = document.querySelector('.basket');

    headerCart.addEventListener('click', () => {
        basket.classList.add('basket-active');
    });

    basketClose.addEventListener('click', () => {
        basket.classList.remove('basket-active');
    });

	slider('.promo__block', '.promo', '.promo__prev', '.promo__next', '.promo__wrapper', '.promo__inner');
	menu('.header__nav', '.header__hamburger button', '.close-btn');

});
