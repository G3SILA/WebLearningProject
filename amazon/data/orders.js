export const orders = JSON.parse(localStorage.getItem('orders')) || []; 

export function addOrder(order) {
    orders.unshift(order); // add to the front of the array
    saveToStorage(); 
}

function saveToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders)); 
}
