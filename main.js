// Variables
const menuEmail = document.querySelector('#navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const email= document.querySelector('.email');

// eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
email.addEventListener('click', notActive);

// fuciones
// notActive desactivar el recargo del el link de .navbar-email 
function notActive(event){
    event.preventDefault();
    console.log("Se hizo click en el email")
}
// toggleDesktopMenu muestra/oculta el submenu .desktopMenu
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

}