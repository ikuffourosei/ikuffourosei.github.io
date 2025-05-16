const MenuLoader = document.querySelector('.menu-icon');
const NavLoader = document.querySelector('.nav-links');
const NavItems = document.querySelectorAll('.nav-links a');

// Toggle menu when menu icon is clicked
MenuLoader.addEventListener('click', () => {
    NavLoader.classList.toggle('active');
});

// Close menu when any nav link is clicked
NavItems.forEach(link => {
    link.addEventListener('click', () => {
        NavLoader.classList.remove('active');
    });
});
