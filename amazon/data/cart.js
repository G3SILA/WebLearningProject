export let cart = [{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 3
}, {
    productId: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    quantity: 2
}];

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
}

export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    cart = newCart; 
}
