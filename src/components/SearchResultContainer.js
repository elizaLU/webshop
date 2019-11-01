import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";

class SearchResultContainer extends Component {
  state = null;

  render() {
    return <SearchResult searchValue={this.props.searchValue} />;
  }
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue
  };
};

export default connect(mapStateToProps)(SearchResultContainer);
