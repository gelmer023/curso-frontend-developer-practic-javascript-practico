// Variables
const menuEmail = document.querySelector('#navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

// eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

// fuciones

// toggleDesktopMenu muestra/oculta el submenu .desktopMenu con el email de cuenta
function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive');
    // desactivar el recargo del el link de .navbar-email 
    event.preventDefault();
}
// toggleMobileMenu muestra/oculta el menu con el icono de menu
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');

}