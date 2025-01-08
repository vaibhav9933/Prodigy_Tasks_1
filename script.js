// script.js

// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to right, #ff6a00, #ee0979)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #ff7e5f, #feb47b)';
    }
});
