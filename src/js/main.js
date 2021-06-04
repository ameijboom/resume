import '../scss/style.scss';
import '@fortawesome/fontawesome-free/js/all';

function toggleMenu() {
    let elem = document.getElementById('navMenu');

    elem.classList.toggle('is-active');
}