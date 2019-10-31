import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";
import ProductContainer from "./ProductContainer";

export class Home extends Component {
  state = {};
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <ProductContainer products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(Home);
