// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
        mobileNav.style.display = 'flex';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    if (mobileNav.style.display === 'flex' && 
        !navWrapper.contains(event.target) && 
        !mobileNav.contains(event.target)) {
        toggleMobileMenu();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
