import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";
import ProductContainer from "./ProductContainer";
import SearchResultContainer from "./SearchResultContainer";

export class Home extends Component {
  state = {};
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <SearchResultContainer searchValue={this.props.searchValue} />
        <ProductContainer products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    searchValue: state.searchValue
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(Home);
