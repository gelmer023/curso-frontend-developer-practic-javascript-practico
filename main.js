// Variables
const menuEmail = document.querySelector('#navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const assideOrdesMenu = document.querySelector('.product-detail');
const cardsContainer= document.querySelector('.cards-container');

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




const productList = [];

productList.push({
    name: "Bicicleta",
    buy: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Camara",
    buy: 230,
    image: "https://images.pexels.com/photos/9910849/pexels-photo-9910849.jpeg?cs=srgb&dl=pexels-cottonbro-9910849.jpg&fm=jpg",
});
productList.push({
    name: "Computador",
    buy: 690,
    image: "https://images.pexels.com/photos/7745560/pexels-photo-7745560.jpeg?cs=srgb&dl=pexels-screen-post-7745560.jpg&fm=jpg",
});

//  <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>
for (product of productList){
    // Aquie se crea la maquetacion del los productos
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText='$' + product.buy;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    // Aquie se inyecta la maquetacion en sus respetivo orden
    // productInfoDiv.appendChild(productPrice);
    // productInfoDiv.appendChild(productName);
    productInfoDiv.append(productPrice, productName);
    productInfoFigure.appendChild(productImgCart);

    // productInfo.appendChild(productInfoDiv);
    // productInfo.appendChild(productInfoFigure);
    productInfo.append(productInfoDiv, productInfoFigure);

    // productCard.appendChild(productImg);
    // productCard.appendChild(productInfo);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);

};
