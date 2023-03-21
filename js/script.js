// Add sticky class to header to fix header in place as scroll begins
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
});

// Handle clicking of the menu btn
// Toggle adding the 'x' class on btn and 'open' class on navbar
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};

// Removes the 'x' and 'open' classes when scrolling starts
window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("open");
};

// Integrate the 'reveal' effect from the 'reveal' js library
// imported in the head of index.html
// original duration was 2500
const sr = ScrollReveal({
    distance: "60px",
    duration: 2000,
    reset: true,
});

// orginal delay was 200
sr.reveal(".home-text", { delay: 100, origin: "left" });
sr.reveal(".home-img", { delay: 100, origin: "right" });
sr.reveal(".container, .about, .menu, .contact", {
    delay: 100,
    origin: "bottom",
});
