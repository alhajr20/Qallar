function menu(navMenu, hamburger, times) {
    const navigationMenu = document.querySelector(navMenu),
          openMenuBtn = document.querySelector(hamburger),
          closeMenuBtn = document.querySelector(times);

    openMenuBtn.addEventListener('click', () => {
        navigationMenu.classList.add('active-menu');
    });

    closeMenuBtn.addEventListener('click', () => {
        navigationMenu.classList.remove('active-menu');
    });
}

export default menu;