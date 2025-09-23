import {renderOrderSummary} from '../../amazon/scripts/checkout/orderSummary.js';
import {loadFromStorage} from '../../amazon/data/cart.js';
import * as CheckoutHeader from '../../amazon/scripts/checkout/checkoutHeader.js';

describe('test suite: renderOrderSummary', () => {
    it('displays the cart', () => {
        document.querySelector('.js-test-container').innerHTML = `<div class="js-order-summary"></div>`;

        const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'; 
        const productId2 = '54e0eccd-8f36-462b-b68a-8182611d9add'; 

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 2, 
                deliveryOptionId: '1'
            }, {
                productId: productId2,
                quantity: 1, 
                deliveryOptionId: '1'
            }]);
        });
        spyOn(CheckoutHeader, 'renderCheckoutHeader').and.callFake(() => {});
        spyOn(localStorage, 'setItem');
        loadFromStorage();
        renderOrderSummary();

        // has two types of items in the cart
        expect(
            document.querySelectorAll('.cart-item-container').length
        ).toEqual(2);

        // right quantity
        expect(
            document.querySelector(`.js-quantity-label-${productId1}`).innerText
        ).toEqual('2'); 
        expect(
            document.querySelector(`.js-quantity-label-${productId2}`).innerText
        ).toContain('1'); 
    });
})
