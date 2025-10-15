import {renderCartQuantity} from '../data/cart.js';
import {getOrderProduct} from '../data/orders.js';
import {trackingDay} from './utils/time.js';
import {getProduct} from '../data/products.js';


function loadPage() {
    renderCartQuantity();
    const url = new URL(window.location.href); 
    const orderId = url.searchParams.get('orderId'); // get value of a key in the url
    const productId = url.searchParams.get('productId');

    const productDetails = getProduct(productId); 
    const orderProduct = getOrderProduct(orderId, productId);

    document.querySelector('.js-main').innerHTML = `
      <div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${trackingDay(orderProduct.estimatedDeliveryTime)}
        </div>

        <div class="product-info">
          ${productDetails.name}
        </div>

        <div class="product-info">
          Quantity: ${orderProduct.quantity}
        </div>

        <img class="product-image" src="${productDetails.image}">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
    `;
}

loadPage();
