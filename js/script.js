/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "It's the possibility of having a dream come true that makes life interesting.",
    source: "Pualo Coelho",
    citation: "The Alchemist",
    year: "1988"
},
{
  quote: "I cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It is too long ago. I was in the middle before I knew that I had begun.",
  source: "Jane Austen",
  citation: "Pride and Prejudice",
  year: "1813"
},
{
  quote: "If a librarian’s job isn’t to keep people from bringing huge containers of hotdogs and chicken wings into where the books are kept, I do not know what it is you are being paid to do.",
  source: "Justin McElroy",
  citation: "My Brother, My Brother, & Me",
  year: "2015"
},
{
  quote: "I think dogs should vote!",
  source: "Griffin McElroy",
  citation: "Monster Factory",
  year: "2016"
},
{
  quote: "There is no greater agony than bearing an untold story inside you.",
  source: "Maya Angelou",
  citation: "I Know Why the Caged Bird Sings",
  year: "1969"
},
{
  quote: "Still, there are times I am bewildered by each mile I have traveled, each meal I have eaten, each person I have known, each room in which I have slept. As ordinary as it all appears, there are times when it is beyond my imagination.",
  source: "Jhumpa Lahiri",
  citation: "Interpreter of Maladies",
  year: "1999"
},
{
  quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
  source: 'Dr. Seuss',
  citation: "Oh, The Places You'll Go!",
  year: "1990"
},
{
  quote: "Get busy living or get busy dying.",
  source: "Stephen King",
  citation: "The Shawshank Redemption",
  year: "1982"
},
{
  quote: "My advice is, never do tomorrow what you can do today. Procrastination is the thief of time.",
  source: "Charles Dickens",
  citation: "David Copperfield",
  year: "1850"
},
{
  quote: "And now that you don’t have to be perfect, you can be good.",
  source: "John Steinbeck",
  citation: "East Of Eden",
  year: "1952"
}
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr){
  //Creates a var storing a random number up to the length of the array and stores the value
  const randomIndex = Math.floor(Math.random() * arr.length);
  //uses generated number to access a quote in the array at said number's index
  const randomQuote = arr[randomIndex];
  //once function is run the value at the index is assigned to randomQuote and made available via return statement
  return randomQuote;
}

//Selects the quote text area on the DOM
const quoteBox = document.querySelector('#quote-box');

const body = document.querySelector('body');

//creates random numbers to represent rgba values between 1 - 100
function randomColor(){
const r = Math.floor(Math.random() * 100) + 1;
const g = Math.floor(Math.random() * 100) + 1;
const b = Math.floor(Math.random() * 100) + 1;
const a = Math.floor(Math.random() * 100) + 1;
const color = `rgba(${r},${g},${b},0.${a})`
return color;
}


/***
 * `printQuote` function
***/
function printQuote(){
//Calls the getRandom function allowing access to the randomQuote value on line 83 and assigns it to myQuotes
  const myQuotes = getRandomQuote(quotes);
//Creates markup in template literal accessing the key value pairs reassigned to myQuotes via getRandomQuote function
  const quoteHtml = `<p class="quote">${myQuotes.quote}.</p>
  <p class="source">${myQuotes.source}<span class="citation">${myQuotes.citation}</span><span class="year">${myQuotes.year}</span></p> `
//sets the quote text area to the value of the random quotes
  quoteBox.innerHTML = quoteHtml;
//assigns a random color value to the body element 
  body.style.backgroundColor = randomColor();
}

//Triggers images and background color to change randomly by calling the printQuote function every 5 seconds
function autoStart(){
  setInterval(printQuote, 5000);
}

autoStart();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false)

