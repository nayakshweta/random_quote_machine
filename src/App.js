import React from 'react';
import logo from './logo.svg';
import './App.css';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteObj: {}
    }
    
    this.getQuote = this.getQuote.bind(this);
  }
  componentDidMount() {
    this.getQuote();
  }
  
  getQuote() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then((data) => {
      this.setState({ quoteObj: data})
    })
  }
  
  render() {
    return (
      <h2 id="quote-box">
        <p id="text">{this.state.quoteObj.content}</p>
        <p id="author">{this.state.quoteObj.author}</p>
        <br/>
        <a id="new-quote" onClick={this.getQuote}>Get New Quote</a>&nbsp;
        <a href="https://twitter.com/intent/tweet" id="tweet-quote">Link to tweet</a>
      </h2>
    );
  }
}


export default QuoteMachine;
