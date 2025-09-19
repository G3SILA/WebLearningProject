// Named import
import {cart, removeFromCart, calculateCartQuantity, updateQuantity, updateDeliveryOption} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import * as utilsModule from '../utils/money.js';
import {deliveryOptions, getDeliveryOption} from '../../data/deliveryOptions.js';

// default import: import only one thing
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


// MVC - model view controller
// model: save and manage date e.g. cart.js  - to generate view
// view: generate html - have controller
// controller: event listeners - update model 

export function renderOrderSummary() {
    let cartSummaryHTML = ''; 

    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);

        const deliveryOptionId = cartItem.deliveryOptionId;
        const deliveryOption = getDeliveryOption(deliveryOptionId);

        const today = dayjs();
        const deliveryDate = today.add(
            deliveryOption.deliveryDays, 
            'day'
        );
        const dateStr = deliveryDate.format('dddd, MMMM D');

        const html = `
            <div class="cart-item-container js-cart-item-container-${product.id}">
                <div class="delivery-date">
                    Delivery date: ${dateStr}
                </div>

                <div class="cart-item-details-grid">
                    <img class="product-image" src="${product.image}">

                    <div class="cart-item-details">
                        <div class="product-name">
                            ${product.name}
                        </div>
                        <div class="product-price">
                            $${utilsModule.formatCurrency(product.priceCents)}
                        </div>
                        <div class="product-quantity">
                            <span>
                                Quantity: <span class="quantity-label js-quantity-label-${product.id}">${cartItem.quantity}</span>
                            </span>

                            <span class="update-quantity-link link-primary js-update-quantity-link" data-product-id="${product.id}">
                                Update
                            </span>
                            <input class="quantity-input js-quantity-input-${product.id}">
                            <span class="save-quantity-link link-primary js-save-quantity-link"  data-product-id="${product.id}">Save</span>

                            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${product.id}">
                                Delete
                            </span>
                        </div>

                        <div class="cart-error-message js-cart-error-message-${product.id}"></div>
                    </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">
                        Choose a delivery option:
                        </div>
                        ${deliveryOptionsHTML(product, cartItem)}
                    </div>
                </div>
            </div>
        `;
        cartSummaryHTML += html;
    });
    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
    updateCartQuantity();


    function deliveryOptionsHTML(product, cartItem) {
        let html = '';

        deliveryOptions.forEach((option) => {
            const today = dayjs();
            const deliveryDate = today.add(
                option.deliveryDays, 
                'day'
            );
            const priceStr = option.priceCents === 0
                ? 'FREE' 
                : `$${utilsModule.formatCurrency(option.priceCents)} -`;

            const isChecked = option.id === cartItem.deliveryOptionId;
            
            html += `<div class="delivery-option js-delivery-option" 
                        data-product-id="${product.id}"
                        data-delivery-option-id="${option.id}">
                        <input type="radio" 
                            ${isChecked? 'checked' : ''}
                            class="delivery-option-input"
                            name="delivery-option-${product.id}">
                        <div>
                            <div class="delivery-option-date">
                                ${deliveryDate.format('dddd, MMMM D')}
                            </div>
                            <div class="delivery-option-price">
                                ${priceStr} Shipping
                            </div>
                        </div>
                    </div>
            `; 
        });
        return html;
    }

    document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const {productId} = link.dataset;
                removeFromCart(productId);

                document.querySelector(`.js-cart-item-container-${productId}`).remove();
                updateCartQuantity();
            });
        });

    function updateCartQuantity() {
        document.querySelector('.js-cart-quantity').innerText = `${calculateCartQuantity()} items`; 
    }


    document.querySelectorAll('.js-update-quantity-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const {productId} = link.dataset;
                document.querySelector(`.js-cart-item-container-${productId}`).classList.add('is-editing-quantity');
            });
    });

    document.querySelectorAll('.js-save-quantity-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const {productId} = link.dataset;
                document.querySelector(`.js-cart-item-container-${productId}`)
                    .classList.remove('is-editing-quantity');
                const inputVal = Number(document.querySelector(`.js-quantity-input-${productId}`).value);

                const ErrorElem = document.querySelector(`.js-cart-error-message-${productId}`);
                ErrorElem.innerHTML = '';

                if (inputVal === 0) {
                    ErrorElem.innerHTML = 'Input cannot be 0. Use delete instead.';
                } else if (!inputVal || inputVal < 0) {
                    ErrorElem.innerHTML = 'Invalid input';
                } else {
                    updateQuantity(productId, inputVal);
                    updateCartQuantity();
                    document.querySelector(`.js-quantity-label-${productId}`).innerText = inputVal;
                }
            });
        });

    document.querySelectorAll('.js-delivery-option').forEach((element)=> {
        element.addEventListener('click', () => {
            const {productId, deliveryOptionId} = element.dataset;
            updateDeliveryOption(productId, deliveryOptionId);
            renderOrderSummary(); // regenerate all html each time change option
        });
    });
}
