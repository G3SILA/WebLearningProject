import {addToCart, cart, loadFromStorage, removeFromCart} from '../../amazon/data/cart.js';

describe('test suite: addToCart', () => {

    beforeEach(() => {
        spyOn(localStorage, 'setItem');
    });

    it('adds a new product to the cart', () => {
        // mock the original localStorage.getItem
        // use a **self-defined** version for testing only
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });

        // mock input object
        spyOn(document, 'querySelector').and.callFake(() => {return { value: "1" };}); 

        loadFromStorage(); // re-load cart with mocked localStorage after load cart in import
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1);

        expect(cart.length).toEqual(1);
        // only works if mocked by spyOn
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); 
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);

        // if localStorage.setItem has been called with the parameters 
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 1,
            deliveryOptionId: '1'
        }]));
    });

    it('add existing product to the cart', () => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1, 
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();
        spyOn(document, 'querySelector').and.callFake(() => {return { value: "1" };}); 

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 1);

        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); 
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });
});

describe('test suite: removeFromCart', () => {
    const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';

    beforeEach(() => {
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 1, 
                deliveryOptionId: '1'
            }]);
        });
        spyOn(localStorage, 'setItem');
        loadFromStorage();
    });

    it('remove exist id in the cart', () => {
        removeFromCart(productId1); 
        expect(cart.length).toEqual(0);
        expect(
            document.querySelector(`.js-cart-item-container-${productId1}`)
        ).toEqual(null);
    }); 

    it('remove non-exist id in the cart', () => {
        expect(cart.length).toEqual(1);
        removeFromCart('1');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1); 
        expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
            productId: productId1,
            quantity: 1, 
            deliveryOptionId: '1'
        }]));
    });
}); 
