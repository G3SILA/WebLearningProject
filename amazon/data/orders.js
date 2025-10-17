export const orders = JSON.parse(localStorage.getItem('orders')) || []; 

export function addOrder(order) {
    orders.unshift(order); // add to the front of the array
    saveToStorage(); 
}

export function removeRecentOrder() {
    orders.shift(); 
    saveToStorage();
}


function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders)); 
}

export function getOrder(orderId) {
    let matchingOrder; 
    orders.forEach((order) => {
        if (order.id === orderId) {
            matchingOrder = order;
        }
    });
    return matchingOrder; 
}

export function getOrderProduct(orderId, productId) {
    const order = getOrder(orderId);
    let matchingProduct;
    order.products.forEach((product) => {
        if (product.productId === productId) {
            matchingProduct = product;
        }
    });
    return matchingProduct;
}
