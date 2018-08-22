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