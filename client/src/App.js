import React, { Component } from "react";
import API from "./utils/API";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      booksSearch: ""
    };
  }

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.booksSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <>
        <h1>Hello World</h1>
      </>
    );
  }
}

export default App;
