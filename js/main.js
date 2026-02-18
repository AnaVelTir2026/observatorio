function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

/* Carrusel automático */
let offset = 0;
setInterval(() => {
    const carousel = document.getElementById("carousel");
    offset -= 320;
    carousel.scrollTo({ left: -offset, behavior: "smooth" });

    if (-offset >= carousel.scrollWidth / 1.1) offset = 0;
}, 3500);