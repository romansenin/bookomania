import React, { Component } from "react";
import BookSearch from "../BookSearch";
import Results from "../Results";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookResults: [],
      bookSearch: ""
    }
  }

  render() {
    return(
      <div>
      <BookSearch />
      <Results />
      </div>
    );
  }
}

export default Search;