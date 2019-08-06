import React from "react";

// import API from "../../utils/API";

const SavedBookItem = props => {
  const book = props.children;
  return (
    <div className="result-item">
      <div className="top-wrapper">
        <section className="main-details">
          <h1>{book.title}</h1>
          {book.authors !== undefined ? <h3>{book.authors.join(", ")}</h3> : ""}
        </section>
        <section className="buttons">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={book.link}
            className="btn btn-primary"
          >
            View
          </a>
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log("delete button");
              // if (
              //   book.imageLinks !== undefined &&
              //   book.imageLinks.thumbnail !== undefined
              // ) {
              //   book.image = book.imageLinks.thumbnail;
              // }
              // book.link = book.previewLink;
              // console.log(book);
              // API.saveBook(book).then(() => {
              //   props.getSavedBooks();
              // }).catch((err) => console.log(err));
            }}
          >
            x
          </button>
        </section>
      </div>
      <section className="description">
        {book.image !== undefined ? (
          <img src={book.image} alt={book.title} />
        ) : (
          ""
        )}
        <p>{book.description}</p>
      </section>
    </div>
  );
};

export default SavedBookItem;
