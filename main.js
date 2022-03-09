// API_URL
const API_URL = 'https://type.fit/api/quotes';

// get DOM elements
const renderData = document.getElementById('renderData');

const getQuotes = (url) =>{
    fetch(url)
    .then(res => res.json())
    .then(data => handleQuotes(data))
    .catch(e => console.log(e.message))
};

const handleQuotes = (data) =>{
    for(let i = 0; i < 10; i++){
        const quoteContainer = document.createElement('div');
        quoteContainer.classList.add('quote-container');

        const quoteElement = document.createElement('p');
        const authorElement = document.createElement('p');

        // populate elements
        quoteElement.innerHTML = data[i].text;
        authorElement.innerHTML = data[i].author;


        quoteContainer.appendChild(quoteElement);
        quoteContainer.appendChild(authorElement);

        // append to defined html element
        renderData.appendChild(quoteContainer)
    }
}

window.onload = getQuotes(API_URL);