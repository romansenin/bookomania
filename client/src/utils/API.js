import axios from "axios";

export default {
  searchBooks: function(query) {
    return axios.get("/api/search", { params: { q: query } });
  },
  getBooks: function() {
    return axios.get("/api/book");
  },
  saveBook: function(bookObj) {
    return axios.post("/api/book", { data: bookObj });
  },
  deleteBook: function(bookId) {
    return axios.delete("/api/book/" + bookId);
  }
};
