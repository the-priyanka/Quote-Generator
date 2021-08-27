const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const newQuoteBtn = document.getElementById("new-quote")

let apiQuotes = []

function newQuote() {
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
  if(quote.text.length > 120){
    quoteText.classList.add('long-quote')
  }
  else{
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent = quote.text
}

async function getQuote() {
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

newQuoteBtn.addEventListener('click', newQuote)
getQuote()