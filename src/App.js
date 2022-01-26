import React, { useState, useEffect } from "react";
import Bootstrap from "bootstrap";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { h2 } from "fontawesome";



const API = "https://type.fit/api/quotes";



function App() {

    const [quotes, setQuotes] = useState([]);
    const [randomQuotes, setRandomQuotes] = useState("");

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(API)
        const data = await response.json();

        setQuotes(data)
        let randomIndex = Math.floor(Math.random() * data.length)
        setRandomQuotes(data[randomIndex])
      }
      fetchData();
    });

    const getNewQuote = () => {
      let randomIndex = Math.floor(Math.random() * quotes.length)
        setRandomQuotes(quotes[randomIndex])
    }

       
        
        return (
            <div className="container vh-100 border d-flex justify-content-center align-items-center" >
              <div className="jumbothon">
                <div className="card border border-secondary min-h-25 min-w-25" id="quote-box" >
                  <div className="card-body">
                    {randomQuotes ? (
                      <>
                        <p id="text" className="card-text" >{randomQuotes.text}</p>
                        <h5 id="author" className="card-title" >{randomQuotes.author || "No author"}</h5>
                      </>
                    ): (
                      <h2>Loading...</h2>
                    )

                  }
                
                      </div>
                <div className="row d-flex justify-content-between p-2 align-items-end">
                    <button className="btn btn-secondary col-1 "><a href="twitter.com/intent/tweet" id="tweet-quote" >
                    <i className="fab fa-twitter "></i>
                    </a></button>
                    <button id="new-quote" className="btn btn-primary col-4 p-1" onClick={getNewQuote} >New Quote</button>
                </div>
                </div>
                </div>
            </div>
        );
    }


ReactDOM.render(<App/>, document.getElementById('app'))



export default App;
