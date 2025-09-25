// window - if in regular js file
// undefined - if in js module 
console.log(this); 

const object2 = { 
    a: 2, 
    // b: this.a

    // object not created yet, this == undefined 
}; 

function logThis() {
    console.log(this); //undefined if module, window if not module
}

logThis();

// set this to hello - change this to whatever we want
logThis.call('hello'); // hello


/*
    function logThis(param1, param2) {
        console.log(this); //undefined if module, window if not module
    }
        
    -> first parameter is this
    logThis.call('hello', param1, param2); 

*/

const object3 = {
    method: () => { // arrow fcn has the same **this** as outside 
        console.log(this);
    }
};

object3.method(); // undefined if module

// usage: 
const object4 = {
    method() {
        console.log(this); 

        [1,2,3].forEach(function() {
            console.log(this); // undefined - no access to object4
        }); 

        [1,2,3].forEach(() => {
            console.log(this); // object4 - same as outside of this small fcn
        }); 
        
    }
}
object4.method();
