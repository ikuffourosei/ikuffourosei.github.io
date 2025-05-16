const NavLoader = document.getElementById("nav-links")
const MenuLoader = document.getElementById("menu-icon")

MenuLoader.addEventListener("click", () => {
    NavLoader.classList.toggle("active")
});
