import React from "react";

const ResultItem = props => {
  const book = props.children;
  return (
    <div>
      <h1>{book.title}</h1>
      {(book.authors ? <h3>Written by {book.authors.join(", ")}</h3> : "")}
      
    </div>
  );
};

export default ResultItem;
