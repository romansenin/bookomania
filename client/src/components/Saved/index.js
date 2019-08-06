import React, { Component } from "react";
import SavedBooks from "../SavedBooks";

class Saved extends Component {
  render() {
    return (
      <div>
        <SavedBooks
          content={this.props.books}
          renderSpinner={this.props.renderSpinner}
          getSavedBooks={this.props.getSavedBooks}
        />
      </div>
    );
  }
}

export default Saved;
