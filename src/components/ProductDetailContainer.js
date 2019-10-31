import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import { getProduct } from "../actions/singleProduct";

class ProductDetailContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("ID", id);
    this.props.getProduct(id);
  }

  render() {
    const singleProduct = this.props.singleProduct;
    console.log("???", singleProduct);
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
