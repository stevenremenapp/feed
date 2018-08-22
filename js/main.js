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