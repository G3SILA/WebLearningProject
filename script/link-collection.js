let links = [
    {
        title: "Todo List", 
        link: "js_notes/TodoList/TodoList.html",
        image: "img/TodoList.png"
    },{
        title: "Calculator", 
        link: "js_notes/small-game/calculator.html",
        image: "img/Calculator.png"
    }, {
        title: "Coin Flip", 
        link: "js_notes/small-game/coin-flip.html",
        image: "img/CoinFlip.jpg"
    }, {
        title: "Fortune-Telling",
        link: "js_notes/small-game/fortuneTelling.html",
        image: "img/FortuneTelling.jpg"
    }, {
        title: "Rock Paper Scissors", 
        link: "js_notes/rock-paper-scissors/rock.html",
        image: "img/Rock-Paper-Scissors.jpg"
    }, {
        title: "My CatTube", 
        link: "youtube/youtube.html",
        image: "img/CatTube.jpg"
    }, {
        title: "My Amazon",
        link: "amazon/amazon.html", 
        image: "img/Amazon.jpg"
    }, {
        title: "My Chatbot", 
        link: "react/chatbot/chatbot.html", 
        image: "img/Chatbot.jpg"
    }
];

let collectionHTML = ''; 
links.forEach((link) => {
    collectionHTML += `
    <div class="single-web-container">
        <div class="link-title">${link.title}</div>
        <a href="${link.link}">
            <img class="web-img" src="${link.image}" alt="${link.title}">
        </a>
    </div>
    `; 
});

document.querySelector('.js-link-collection').innerHTML = collectionHTML; 
