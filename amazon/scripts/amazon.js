// modules only work with live server

// import {variable as v} from 'path to file'  
import {cart} from '../data/cart.js';

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
                    src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                ${(product.priceCents / 100).toFixed(2)}
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

// store time-out id by product id
const timeOutMessageId = {};

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // productId is the data attribute data-product-id, with naming style auto changed
        const {productId} = button.dataset; // destructuring
        const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
        
        let matchingItem; 

        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });
        if (matchingItem) {
            matchingItem.quantity += quantity; 
        } else {
            cart.push({
                productId,  //shorthand - same name
                quantity
            });
        }

        // quantity update
        let totalQuantity = 0; 

        cart.forEach((item) => {
            totalQuantity += item.quantity;
        });
        
        document.querySelector('.js-cart-quantity').innerText = totalQuantity; 

        // massage displayed
        const messageElem = document.querySelector(`.js-added-message-${productId}`);
        messageElem.classList.add('added-cart-message');

        clearTimeout(timeOutMessageId[productId]);
        timeOutMessageId[productId] = setTimeout(() => {
            messageElem.classList.remove('added-cart-message');
        }, 1500);

    });
});





