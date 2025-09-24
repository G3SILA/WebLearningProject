// modules only work with live server

// import {variable as v} from 'path to file'  
import {addToCart, calculateCartQuantity} from '../data/cart.js';
import {products} from '../data/products.js';

/* 
    import * as cartModule from '../data/cart.js'
    cartModule.cart
    cartModule.addToCart('id');
*/

// products in data/products.js

let productsHTML = ''; 

products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                    src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                    src="${product.getStarsUrl()}">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
                <select class="js-quantity-selector-${product.id}">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart  js-added-message-${product.id}">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `;   // used data attribute here
});      // like html attribute, must start with data-

document.querySelector('.js-products-grid').innerHTML = productsHTML; 
updateCartQuantity();

// store time-out id by product id
const timeOutMessageId = {};

function updateCartQuantity() {    
    document.querySelector('.js-cart-quantity').innerText = calculateCartQuantity(); 
}

function addCartMessage(productId) {
    const messageElem = document.querySelector(`.js-added-message-${productId}`);
    messageElem.classList.add('added-cart-message');

    clearTimeout(timeOutMessageId[productId]);
    timeOutMessageId[productId] = setTimeout(() => {
        messageElem.classList.remove('added-cart-message');
    }, 1500);
}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // productId is the data attribute data-product-id, with naming style auto changed
        const {productId} = button.dataset; // destructuring

        addToCart(productId);
        updateCartQuantity();
        addCartMessage(productId);
    });
});





