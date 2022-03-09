// API_URL
const API_URL = 'https://type.fit/api/quotes';

// get DOM elements
const renderData = document.getElementById('renderData');

const getQuotes = (url) =>{
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
};

window.onload = getQuotes(API_URL);