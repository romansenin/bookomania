import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    }
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Results</h5>
          <div>{this.state.content === "" ? "Search for a book to see the results." : this.state.content}</div>
        </div>
      </div>
    );
  }
}

export default Results;
