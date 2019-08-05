import React, { Component } from "react";
import "./BookSearch.css";

import API from "../../utils/API";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleFormSubmit(event) {
    API.getBooks(this.state.value).then(res => {
      this.props.handleSearch(res.data.items);
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="bookSearch">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Book Search</h5>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="bookInput">Book</label>
                <input
                  type="text"
                  className="form-control"
                  id="bookInput"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSearch;
