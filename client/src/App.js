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
  }

  handleSearch(searchResults) {
    this.setState({ books: searchResults });
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
              render={() => <Search books={this.state.books} handleSearch={this.handleSearch} />}
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
