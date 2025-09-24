function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];
        },

        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        addToCart(productId) {
            const quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
            let matchingItem; 
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            });
            if (matchingItem) {
                matchingItem.quantity += quantity; 
            } else {
                this.cartItems.push({
                    productId,  //shorthand - same name
                    quantity,
                    deliveryOptionId: '1'
                });
            }
            this.saveToStorage();
        }, 

        removeFromCart(productId) {
            const newCart = [];
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);
                }
            });
            this.cartItems = newCart; 
        
            this.saveToStorage();
        },

        calculateCartQuantity() {
            let totalQuantity = 0; 

            this.cartItems.forEach((cartItem) => {
                totalQuantity += cartItem.quantity;
            });
            return totalQuantity; 
        }, 
        
        updateQuantity(productId, newQuantity) {
            for(let i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i].productId === productId) {
                    this.cartItems[i].quantity = newQuantity;
                    this.saveToStorage();
                    break;
                } 
            }
        },

        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem; 
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            });

            matchingItem.deliveryOptionId = deliveryOptionId; 
            this.saveToStorage();
        }

    };
    return cart; 
}

const cart = Cart('cart-oop'); 
const businessCart = Cart('cart-business'); 


cart.loadFromStorage();
businessCart.loadFromStorage();

// console.log(cart);
// console.log(businessCart); 
