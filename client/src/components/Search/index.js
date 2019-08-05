import React, { Component } from "react";
import BookSearch from "../BookSearch";
import Results from "../Results";

class Search extends Component {
  render() {
    return(
      <div>
      <BookSearch handleSearch={this.props.handleSearch}/>
      <Results content={this.props.books}/>
      </div>
    );
  }
}

export default Search;