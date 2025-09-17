export const cart = [];

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
