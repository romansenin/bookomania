import React from "react";
import "./ResultItem.css";

const ResultItem = props => {
  const book = props.children;
  return (
    <div className="result-item">
      <div className="top-wrapper">
        <section className="main-details">
          <h1>{book.title}</h1>
          {(book.authors ? <h3>{book.authors.join(", ")}</h3> : "")}
        </section>
        <section className="buttons">
          <a rel="noopener noreferrer" target="_blank" href={book.previewLink} className="btn btn-primary">View</a>
          <button className="btn btn-danger">Save</button>
        </section>
      </div>
      <section className="description">
        <img src={book.imageLinks.thumbnail} alt={book.title} />
        <p>{book.description}</p>
      </section>
    </div>
  );
};

export default ResultItem;
