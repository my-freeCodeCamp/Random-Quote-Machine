import { useState } from 'react'
import quote from './assets/quote.json'
import { FaTwitter, FaTumblr, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css'

const getRandomQuote = () => {
  return quote[Math.floor(Math.random() * quote.length)];
}

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  return `rgb(${red},${blue},${green})`;
}

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [color, setColor] = useState(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  };  

  const transition = "all 1s";

  return (
    <div
      className="background"
      style={{ backgroundColor: color, transition }}
    >
      <div id="quote-box">
        <div
          className="quote-content"
          style={{ color: color, transition }}
        >
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            {quote.quote}
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              backgroundColor: color,
              marginRight: "10px",
              transition,
            }}
          >
            <FaTwitter color="white" />
          </a>
          <a
            href={`https://www.tumblr.com/`}
            id="tweet-quote"
            style={{
              backgroundColor: color,
              marginRight: "10px",
              transition,
            }}
          >
            <FaTumblr color="white"/>
          </a>
          <button
            id="new-quote"
            onClick={changeQuote}
            style={{ backgroundColor: color, transition }}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
