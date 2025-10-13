const xhrPrac = new XMLHttpRequest();

xhrPrac.open('GET', 'https://supersimplebackend.dev/greeting'); 
xhrPrac.send(); 
xhrPrac.addEventListener('load', () => {
    console.log(xhrPrac.response);
});


fetch(
    'https://supersimplebackend.dev/greeting'
).then((response) => {
    // wrong! 
    // console.log(response.text()); logs a promise
    return response.text();
}).then((text) => {
    console.log(text);
});


async function myFetchGreet() {
    const response = await fetch('https://supersimplebackend.dev/greeting');
    const text = await response.text(); 
    console.log(text);
}

myFetchGreet();

async function postGreet() {
    const response = await fetch('https://supersimplebackend.dev/greeting', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                name: 'Gesila'
            })
        }
    );
    const text = await response.text(); 
    console.log(text);
}

postGreet();

/*
    Access to fetch at 'https://amazon.com/' from origin 'http://127.0.0.1:5500' 
    has been blocked by CORS policy: 
    No 'Access-Control-Allow-Origin' header is present on the requested resource.
*/
async function requestToAmazon() {
    try {
        const response = await fetch('https://amazon.com');
        const text = await response.text(); 
        console.log(text);
    } catch (err){
        console.log(err);
    }
   
}

requestToAmazon();

async function errPost() {
    try {
        const response = await fetch('https://supersimplebackend.dev/greeting',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        
        if (response.status >= 400) throw response; 
        const text = await response.text();
        console.log(text);

    } catch (err) {
        if (err.status === 400) console.log(await err.json());
        else console.log('Network Error, try again later');
    }
}

errPost();
