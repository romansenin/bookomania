import React, { Component } from "react";
import ResultItem from "../ResultItem";
import "./Results.css";

class Results extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Results</h5>
          <div>
            {this.props.content.length === 0 ? (
              "No results found."
            ) : (
              <ul>
                {this.props.content.map((value, index) => {
                  return (
                  <ResultItem key={index}>
                    {value.volumeInfo}
                  </ResultItem>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
