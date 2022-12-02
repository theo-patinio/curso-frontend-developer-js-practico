const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAsaid);
productDetailClose.addEventListener('click', closeProductDetail);


function toggleDesktopMenu() {
    const isAsaideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsaideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsaideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsaideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');

    closeProductDetail();
}

function toggleAsaid() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');


    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }



    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAsaid(){
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Zapatillas',
    price: 110,
    image: "https://http2.mlstatic.com/D_NQ_NP_762225-MLC50786363417_072022-W.jpg"
});

productList.push({
    name: 'IPhone',
    price: 200,
    image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-blue-220907-geo_inline.jpg.large.jpg"
});

productList.push({
    name: 'Perro',
    price: 250,
    image: "https://nupec.com/wp-content/uploads/2020/07/Captura-de-pantalla-2020-07-24-a-las-17.33.44.png"
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        //aparece y desapare info. de el producto
        productImg.addEventListener('click', openProductDetailAsaid);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
       
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    };
}

renderProducts(productList);
