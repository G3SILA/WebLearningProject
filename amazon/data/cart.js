export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    let matchingItem; 
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
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
    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart; 

    saveToStorage();
}

export function calculateCartQuantity() {
    let totalQuantity = 0; 

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });
    return totalQuantity; 
}
