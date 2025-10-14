export let cart;


export async function loadCartFetch() {
    const response = await fetch('https://supersimplebackend.dev/cart'); 
    const data = await response.text();
    console.log(data); 
    return data; // resolve the value to data instead of undefined
}

loadFromStorage();

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
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
            quantity,
            deliveryOptionId: '1'
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

export function updateQuantity(productId, newQuantity) {
    for(let i = 0; i < cart.length; i++) {
        if (cart[i].productId === productId) {
            cart[i].quantity = newQuantity;
            saveToStorage();
            break;
        } 
    }
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem; 
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId; 
    saveToStorage();
}
