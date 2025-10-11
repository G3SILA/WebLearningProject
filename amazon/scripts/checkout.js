import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary } from './checkout/paymentSummary.js';
// run everything inside but not import any var or fcn
// side effects import 
import '../data/cart-oop.js'; 
// import '../data/cart-class.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';


loadProductsFetch().then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});


//!!! Note: Promise creates an independent sequence of "next"
//      so that many promises can run at the same time

// similar to done in jasmine
// only proceed to the next step when resolve() is called
// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve();
//     });
// }).then (() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });




// how Promise flatten our code - reduce callbacks

/*
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value1');         // give resolve a value! 
        });
    
    }).then ((value) => {              // parameter named value
        return new Promise((resolve) => {
            loadCart(() => {
                resolve();
            });
        });
    
    }).then (() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
*/


// Run multiple Promises at a time. Wait for all promises to finish
// array of promises
/* 
    Promise.all([
        new Promise((resolve) => {
            loadProducts(() => {
                resolve();
            });
        }), 
        new Promise((resolve) => {
            loadCart(() => {
                resolve();
            });
        })

        ]).then((values) => {                // values is an array of values
            renderOrderSummary();
            renderPaymentSummary();
        });

*/ 
