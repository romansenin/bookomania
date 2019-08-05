import React from "react";
import "./ResultItem.css";

const ResultItem = props => {
  const book = props.children;
  return (
    <div className="result-item">
      <div className="priority-content">
        <h1>{book.title}</h1>
        <a target="_blank" href={book.previewLink} className="btn btn-primary">View</a>
        <button className="btn btn-danger">Save</button>
      </div>
      
      {(book.authors ? <h3>Written by {book.authors.join(", ")}</h3> : "")}
      
    </div>
  );
};

export default ResultItem;
