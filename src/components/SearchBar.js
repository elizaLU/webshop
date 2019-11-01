import React, { Component } from "react";
import { connect } from "react-redux";
import { searchValue } from "../actions/search";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  render() {
    const searchValue = this.state.value;
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.onSubmit}
        />
        <div>{searchValue}</div>
      </div>
    );
  }
}

const mapActionToProps = {
  searchValue
};

export default connect(
  null,
  mapActionToProps
)(SearchBar);
