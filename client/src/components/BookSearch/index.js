import React, { Component } from "react";
import "./BookSearch.css";

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
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
            <form onSubmit={this.props.handleFormSubmit}>
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
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSearch;
