import slider from './modules/slider';
import menu from './modules/menu';

document.addEventListener('DOMContentLoaded', () => {

	slider('.promo__block', '.promo', '.promo__prev', '.promo__next', '.promo__wrapper', '.promo__inner');
	menu('.header__nav', '.header__hamburger button', '.close-btn');

});
