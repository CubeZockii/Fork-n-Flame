// static/script.js

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileMenuLinks = mobileNav.querySelectorAll('a');

    // Funktion zum Schließen des Menüs (um Code-Wiederholung zu vermeiden)
    function closeMobileMenu() {
        mobileNav.classList.remove("active");
        const icon = mobileMenuIcon.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

    // --- Logik für das mobile Hamburger-Menü ---
    mobileMenuIcon.addEventListener("click", function () {
        const isActive = mobileNav.classList.contains("active");
        if (isActive) {
            closeMobileMenu();
        } else {
            mobileNav.classList.add("active");
            // Ändere das Icon zu X
            const icon = mobileMenuIcon.querySelector("i");
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        }
    });
    
    // --- NEU: Schließe das Menü bei Klick auf den Hintergrund (Overlay) ---
    mobileNav.addEventListener('click', function(event) {
        // Prüft, ob das geklickte Element das Overlay selbst ist (und nicht ein Kind-Element wie ein Link)
        if (event.target === mobileNav) {
            closeMobileMenu();
        }
    });

    // Schließe das Menü, wenn auf einen Link geklickt wird
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // --- Logik für die Navbar-Sichtbarkeit beim Scrollen ---
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // --- Logik für Scroll-Animationen ---
    const animatedElements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});
