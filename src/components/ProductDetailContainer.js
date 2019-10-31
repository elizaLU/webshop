import React, { Component } from "react";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import { getProduct } from "../actions/singleProduct";
import { addProduct } from "../actions/products"
//import { selectProduct } from "../actions/products"


class ProductDetailContainer extends Component {
  state = {}

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProduct(id);
  }


  render() {
    return <ProductDetail
      singleProduct={this.props.singleProduct}
      addProduct={this.props.addProduct}
    />;
  }
}

const mapStateToProps = state => {
  return {
    singleProduct: state.singleProduct,
  };
};

const mapActionToProps = {
  getProduct,
  addProduct
}

export default connect(
  mapStateToProps,
  mapActionToProps,
)(ProductDetailContainer);
