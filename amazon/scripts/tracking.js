import {renderCartQuantity} from '../data/cart.js';
import {getOrder, getOrderProduct} from '../data/orders.js';
import {trackingDay, dayDifference} from './utils/time.js';
import {getProduct} from '../data/products.js';


function loadPage() {
    renderCartQuantity();
    const url = new URL(window.location.href); 
    const orderId = url.searchParams.get('orderId'); // get value of a key in the url
    const productId = url.searchParams.get('productId');

    const productDetails = getProduct(productId); 
    const orderProduct = getOrderProduct(orderId, productId);
    
    const deliveryDate = orderProduct.estimatedDeliveryTime; 
    const orderDate = getOrder(orderId).orderTime; 
    const deliveryProgress = (dayDifference(orderDate, new Date().toISOString())
        / dayDifference(orderDate, deliveryDate)) * 100;
    
    document.querySelector('.js-main').innerHTML = `
      <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${trackingDay(deliveryDate)}
        </div>

        <div class="product-info">
          ${productDetails.name}
        </div>

        <div class="product-info">
          Quantity: ${orderProduct.quantity}
        </div>

        <img class="product-image" src="${productDetails.image}">

        <div class="progress-labels-container">
          <div class="progress-label ${deliveryProgress < 50 ? 'current-status' : ''}">
            Preparing
          </div>
          <div class="progress-label ${deliveryProgress >= 50 && deliveryProgress < 100? 'current-status' : ''}">
            Shipped
          </div>
          <div class="progress-label ${deliveryProgress >= 100? 'current-status' : ''}">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${deliveryProgress}%"></div>
        </div>
      </div>
    `;
    
}

loadPage();
