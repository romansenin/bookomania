import React, { Component } from "react";
import ResultItem from "../ResultItem";
import FontAwesome from "react-fontawesome";
import "./Results.css";

class Results extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Results</h5>
          <div>
            {this.props.content.length === 0 ? (
              <p>No results found.</p>
            ) : this.props.content === "spinner" ? (
              <FontAwesome
                className="super-crazy-colors"
                name="spinner"
                size="5x"
                spin
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            ) : (
              <ul>
                {this.props.content.map((value, index) => {
                  return (
                    <ResultItem key={index}>{value.volumeInfo}</ResultItem>
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
