const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      author: "Steve Jobs",
    },
    {
      quote:
        "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt",
    },
    {
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: "Oprah Winfrey",
    },
    {
      quote:
        "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle",
    },
    {
      quote:
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "Mother Teresa",
    },
    {
      quote:
        "Always remember that you are absolutely unique. Just like everyone else.",
      author: "Margaret Mead",
    },
    {
      quote:
        "You will face many defeats in life, but never let yourself be defeated.",
      author: "Maya Angelou",
    },
    {
      quote: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;