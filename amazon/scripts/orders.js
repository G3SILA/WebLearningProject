import {orders} from '../data/orders.js';
import {intoMonthDay} from './utils/time.js';
import {formatCurrency} from './utils/money.js';
import {getProduct} from '../data/products.js';

function renderOrdersPage() {
    orders.forEach((order) => {
        console.log(order);

        const isoString = order.orderTime;
        const orderId = order.id; 
        const products = order.products; 
         
        document.querySelector('.js-orders-grid').innerHTML +=
            `<div class="order-container order-container-${orderId}">

                <div class="order-header">
                    <div class="order-header-left-section">
                        <div class="order-date">
                        <div class="order-header-label">Order Placed:</div>
                        <div>${intoMonthDay(isoString)}</div>
                        </div>
                        <div class="order-total">
                        <div class="order-header-label">Total:</div>
                        <div>$${formatCurrency(order.totalCostCents)}</div>
                        </div>
                    </div>

                    <div class="order-header-right-section">
                        <div class="order-header-label">Order ID:</div>
                        <div>${orderId}</div>
                    </div>
                </div>
            </div>`;
        

        products.forEach((product) => {
            const deliveryDate = product.estimatedDeliveryTime; 
            const matchingProduct = getProduct(product.productId);

            document.querySelector(`.order-container-${orderId}`).innerHTML +=
                `<div class="order-details-grid">
                    <div class="product-image-container">
                        <img src="${matchingProduct.image}">
                    </div>

                    <div class="product-details">
                        <div class="product-name">
                            ${matchingProduct.name}
                        </div>
                        <div class="product-delivery-date">
                            Arriving on: ${intoMonthDay(deliveryDate)}
                        </div>
                        <div class="product-quantity">
                            Quantity: ${product.quantity}
                        </div>
                        <button class="buy-again-button button-primary">
                            <img class="buy-again-icon" src="images/icons/buy-again.png">
                            <span class="buy-again-message">Buy it again</span>
                        </button>
                    </div>
                    
                    <div class="product-actions">
                        <a href="tracking.html">
                            <button class="track-package-button button-secondary">
                            Track package
                            </button>
                        </a>
                    </div>
                </div>`;
     
        });
    }); 
}

renderOrdersPage();
