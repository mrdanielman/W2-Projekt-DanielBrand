// Deklarering av konstanter och variabler

const hMenu = document.querySelector('#hMenu');
const navLinks = document.querySelector('.navLinks');


// Tillkallning av funktioner

hMenu.addEventListener('click', showHMenu);


// Funktioner

function showHMenu() {
    switch (navLinks.style.display) {
        case '': 
            navLinks.style.display = 'block';
            break;

        case 'none':
            navLinks.style.display = 'block';
            break;

        case 'block':
            navLinks.style.display = 'none';
            break;
    }
}