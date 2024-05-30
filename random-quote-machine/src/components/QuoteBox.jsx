import React from "react";
import { useState, useEffect } from "react";
import "../styles.css";
import "../colorChanger.js";
import changeColor from "../colorChanger.js";

export const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [background, setBackground] = useState(changeColor());

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setBackground(changeColor());
    } catch (error) {
      console.log("Error fetching the quote", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      id="quote-box"
      class="container"
      style={{ backgroundColor: background }}
    >
      <div class="quote-text">
        <i class="fas fa-quote-left"></i>
        <span id="text" style={{ color: background }}>
          {quote}
        </span>
      </div>
      <div class="quote-author">
        <span id="author">{author}</span>
      </div>
      <div id="buttons" class="container">
        <a
          class="btn btn-primary btn-sm"
          href="https://twitter.com/intent/tweet"
          role="button"
          id="tweet-quote"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <button
          id="new-quote"
          type="button"
          class="btn btn-primary"
          onClick={fetchQuote}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
