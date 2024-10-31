const header = document.querySelector("header");
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function() {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

menuIcon.onclick = () => {
    navbar.classList.toggle('open'); // Toggle the open class to slide the menu in/out
}

