import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
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
      <Router>
        <div className="wrapper">
          <Navbar />
          <Container>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
