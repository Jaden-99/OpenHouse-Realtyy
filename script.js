const header = document.querySelector("header");
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Function to handle scroll event
function handleScroll() {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Function to handle menu icon click
function toggleNavbar() {
    navbar.classList.toggle('open');
}

// Event listeners
window.addEventListener("scroll", handleScroll);
menuIcon.addEventListener("click", toggleNavbar);
