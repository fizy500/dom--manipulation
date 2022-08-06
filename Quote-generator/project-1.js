// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: "If you look at what you have in life,you'll always have more.If you look at what you don't have in life,you'll never have enough.",
        person: 'Oprah Winfrey'
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: 'Confucius'
    },
    {
        quote: "Our lives begin to end the day we become silent about things that matter.",
        person: 'Martin Luther King,Jr'
    },
    {
        quote: " The journey of a thousand miles begin with one step.",
        person: 'Lao Tzu'
    },
    {
        quote: "Remember that not getting what you want is sometimes a powerful stroke of luck.",
        person:'dalai Lama'
    },
    {
        quote: "I do the very best i know how, the very best i can;and i mean to keep on doing so until the end",
        person:'Abraham Lincoln'
     },
];
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

