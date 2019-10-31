import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import { getProduct } from "../actions/singleProduct";

class ProductDetailContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }

  render() {
    const singleProduct = this.props.singleProduct;
    return <ProductDetail singleProduct={singleProduct} />;
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.singleProduct
  };
};

export default connect(
  mapStateToProps,
  { getProduct }
)(ProductDetailContainer);
