import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quotes: {
        content: '',
        author: ''
      }
    }
    // this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    this.getQuotes();
  }

  getQuotes() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then( (data) => {
         this.setState({quotes: {
            content: data.content,
            author: data.author
          }})
        }
      )
  }
  handleClick() {
    this.getQuotes();
  }
  render() {
    const { author, content } = this.state.quotes;
    return (
      [
        <p>{content}</p>,
        <span>{author}</span>,
        <button onClick={() => this.handleClick()}>new quote</button>
      ]
     );
  }
}

export default App; 



