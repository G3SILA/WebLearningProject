// making GET request == using browser

const xhr = new XMLHttpRequest();

// initialize a request, (method, url)

// wait for the response 
xhr.addEventListener('load', () => {
    console.log(xhr.response); // plain text
}); 

xhr.open('GET', 'https://supersimplebackend.dev'); 
xhr.send(); 
// xhr.response -> undefined initially because response didn't come back yet



// response contemt type: JSON
const URLpath = new XMLHttpRequest(); 

URLpath.addEventListener('load', () => {
    console.log(URLpath.response);
}); 

URLpath.open('GET', 'https://supersimplebackend.dev/products/first'); 
URLpath.send();


// other types: text/html, image/jpeg, etc. 
