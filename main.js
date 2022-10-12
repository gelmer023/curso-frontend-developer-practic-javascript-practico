// Variables
const menuEmail = document.querySelector('#navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const assideOrdesMenu = document.querySelector('.product-detail');

// eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleAssiMenu);

// fuciones

// toggleDesktopMenu muestra/oculta el submenu .desktopMenu con el email de cuenta
function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive');
    // desactivar el recargo del el link de .navbar-email 
    event.preventDefault();
}
// toggleMobileMenu muestra/oculta el menu con el icono de menu
function toggleMobileMenu(){
    const isAssiMenuClose = assideOrdesMenu.classList.contains('inactive');
    if(!isAssiMenuClose){
        assideOrdesMenu.classList.add('inactive');
        console.log("Estaba abieto asimenu y se cerro");
    }
    mobileMenu.classList.toggle('inactive');

}
// toggleAssiMenu
function toggleAssiMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClose || !isDesktopMenuClose){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        console.log("Estaba abieto mobile y desktop menu y se cerro");
    }
    assideOrdesMenu.classList.toggle('inactive');
}