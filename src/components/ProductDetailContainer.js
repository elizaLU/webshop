import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";

class ProductDetailContainer extends Component {
  componentDidMount() {
    //const productId = this.props.match.params.id;
    //TODO!!!!!!!!!!!! this.props.getProduct(productId);
  }

  render() {
    const products = this.props.products;
    console.log("???", products);
    return <ProductDetail products={products} />;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductDetailContainer);
