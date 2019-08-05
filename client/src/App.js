import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderSpinner = this.renderSpinner.bind(this);
    this.handleEmptySearch = this.handleEmptySearch.bind(this);
  }

  handleSearch(searchResults) {
    this.setState({ books: searchResults });
  }

  handleEmptySearch() {
    this.renderSpinner();
    let seconds = 1;
    var waitTwoSeconds = () => {
      if (seconds === 2) {
        this.setState({ books: "" });
      } else {
        seconds++;
        setTimeout(waitTwoSeconds, 1000); // check again in a second
      }
    };

    waitTwoSeconds();
  }

  renderSpinner() {
    this.setState({ books: "spinner" });
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Navbar />
          <Container>
            <Route
              exact
              path="/"
              render={() => (
                <Search
                  books={this.state.books}
                  handleSearch={this.handleSearch}
                  handleEmptySearch={this.handleEmptySearch}
                  renderSpinner={this.renderSpinner}
                />
              )}
            />
            <Route exact path="/saved" component={Saved} />
          </Container>
          <div className="push" />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
