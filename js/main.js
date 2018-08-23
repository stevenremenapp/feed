// Change background on fixed header with scroll

let nav = document.querySelector('nav');

window.onscroll = function() {
    setNavBackground();
}

function setNavBackground() {
    if (window.pageYOffset > 80) {
        nav.classList.add('nav-solid-background');
    } else {
        nav.classList.remove('nav-solid-background');
    }
}

// Set up smooth scroll

let scroll = new SmoothScroll('a[href*="#"]', {
    header: 'nav',
    speed: 1000,
    offset: 0
});

// Set up scroll spy

gumshoe.init({
    selector: '[data-gumshoe-header] a',
    selectorHeader: '[data-gumshoe-header]',
    offset: 50,
    activeClass: 'nav-active-location'
});

// Handle hamburger menu

let menuIcon = document.querySelector('#js-nav-icon i');
let mobileNav = document.querySelector('.nav-mobile-container');
let navFeedLogo = document.getElementById('js-logo');

// Toggle menu icon
menuIcon.addEventListener('click', function() {
    if (menuIcon.classList.contains('fa-bars')) {
        openMobileNav();
    } else {
        closeMobileNav();
    }
});

// Close mobile nav when nav item is clicked
mobileNav.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        closeMobileNav();
    }
});

// Close mobileNav if window is resized larger while open
window.addEventListener('resize', function() {
    if (window.innerWidth > 731) {
        closeMobileNav();
    }
});

function openMobileNav() {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
    mobileNav.style.display = 'flex';
    navFeedLogo.classList.add('logo-mobile');
    menuIcon.classList.add('nav-icon-mobile');
}

function closeMobileNav() {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    mobileNav.style.display = 'none';
    navFeedLogo.classList.remove('logo-mobile');
    menuIcon.classList.remove('nav-icon-mobile');
}

