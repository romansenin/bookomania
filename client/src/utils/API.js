import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },
  saveBook: function(bookObj) {
    return axios.post("/api/books", { data: { book: bookObj } });
  }
};
