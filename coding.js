var quote = ["\"The only way to do great work is to love what you do.\" - Steve Jobs",
            "\"Success is not the key to happiness. Happiness is the key to success.\" - Albert Schweitzer",
            "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
            "\"Your time is limited, so don't waste it living someone else's life.\" - Steve Jobs",
            "\"The best way to predict the future is to invent it.\" - Alan Kay"];
quote = quote[Math.floor(Math.random() * quote.length)]; // Select a random quote
console.log(quote);

// Display the quote in an HTML element with id "quoteDisplay"
document.getElementById("quoteDisplay").innerText = quote; 
