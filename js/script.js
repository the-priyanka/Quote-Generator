const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const newQuoteBtn = document.getElementById("new-quote")
const twitter = document.getElementById("twitter")
const loader = document.getElementById("loader")

let apiQuotes = []

// show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hidden loading 
function complete() {
  quoteContainer.hidden = false
  loader.hidden = true
}

function newQuote() {
  loading()
  let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  // console.log(quote)

  // author code 
  if (!quote.author) {
    authorText.textContent = "Unknown"
  }
  else {
    author.textContent = quote.author
  }

  // text code 
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
  }
  else {
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent = quote.text
  complete()
}

async function getQuote() {
  loading()
  const apiUrl = "https://type.fit/api/quotes"

  try {
    const response = await fetch(apiUrl)
    //  console.log(response)
    apiQuotes = await response.json()
    //  return users
    newQuote()
  }
  catch (error) {

  }
}

// tweeter quote 
function tweetQuote() {
  let quote = quoteText.innerText
  let author = authorText.innerText
  let tweeterUrl = `https://twitter.com/intent/tweet?text=${ quote } - ${ author }`
  window.open(tweeterUrl, "_blank")
} 

newQuoteBtn.addEventListener('click', newQuote)
twitter.addEventListener('click', tweetQuote)

getQuote()