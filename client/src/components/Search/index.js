import React, { Component } from "react";
import BookSearch from "../BookSearch";
import Results from "../Results";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookResults: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleSearch(searchResults) {
    console.log(searchResults);
    this.setState({bookResults: searchResults});
  }

  render() {
    return(
      <div>
      <BookSearch handleSearch={this.handleSearch}/>
      <Results content={this.state.bookResults}/>
      </div>
    );
  }
}

export default Search;