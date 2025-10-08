import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary } from './checkout/paymentSummary.js';
// run everything inside but not import any var or fcn
// side effects import 
import '../data/cart-oop.js'; 
// import '../data/cart-class.js';
import {loadProducts} from '../data/products.js';

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

