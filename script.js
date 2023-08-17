const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteButton = document.getElementById('newQuoteButton');

async function fetchRandomQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quote:', error);
    return null;
  }
}

function displayQuote(quote) {
  quoteText.textContent = `"${quote.content}"`;
  quoteAuthor.textContent = `- ${quote.author}`;
}

newQuoteButton.addEventListener('click', async () => {
  newQuoteButton.disabled = true;
  const randomQuote = await fetchRandomQuote();
  if (randomQuote) {
    displayQuote(randomQuote);
  }
  newQuoteButton.disabled = false;
});

// Load an initial quote
newQuoteButton.click();

