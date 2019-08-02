import React, { Component } from "react";
import API from "./utils/API";

class App extends Component {
  
  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
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
