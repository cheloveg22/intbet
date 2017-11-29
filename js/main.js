var nav = document.getElementById('nav');
var mobileMenu = document.getElementById('mobile-menu');

function openMenu() {
    if (!nav.classList.contains("menu-opened")) {
        nav.classList.add("menu-opened")
    }
}

function closeMenu() {
    nav.classList.remove("menu-opened");
}

// console.log(nav);