var quotes = [
    "The best way to predict your future is to create it.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "You miss 100% of the shots you don’t take.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall."
  ]
  
  function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("newQuoteSection").innerHTML = quotes[randomNumber];
  }
  