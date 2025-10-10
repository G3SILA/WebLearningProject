import {renderOrderSummary} from '../../amazon/scripts/checkout/orderSummary.js';
import {loadFromStorage, cart} from '../../amazon/data/cart.js';
import * as CheckoutHeader from '../../amazon/scripts/checkout/checkoutHeader.js';
import {loadProducts} from '../../amazon/data/products.js';

describe('test suite: renderOrderSummary', () => {
    // for the suite
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'; 
    const productId2 = '54e0eccd-8f36-462b-b68a-8182611d9add'; 
    
    // done is provided by jasmine 
    // wait until done is called again (step finished)
    beforeAll((done) => {
        loadProducts(() => {
            done(); // call done to continue running
        });
    });

    beforeEach(() => {
        document.querySelector('.js-test-container').innerHTML = `
        <div class="js-order-summary"></div>
        <div class="js-checkout-header"></div>
        <div class=".js-payment-summary"></div> `;

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
    });

    afterEach(() => {
        // remove after test, clear html
        document.querySelector('.js-test-container').innerHTML = '';
    });

    it('displays the cart', () => {
        
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

    it('removes a product', () => {

        // note there is not such a class, just for demo purpose
        // document.querySelector(`.js-delete-link-${productId1}`).click(); 
        expect(
            document.querySelectorAll(`.cart-item-container`).length
        ).toEqual(2); // didn't delete 

        // expect(
        //     document.querySelector(`.js-cart-item-container-${productId1}`)
        // ).toEqual(null);
        expect(
            document.querySelector(`.js-cart-item-container-${productId2}`)
        ).not.toEqual(null);

        expect(cart.length).toEqual(2); 
        expect(cart[0].productId).toEqual(productId1);
    });
})
