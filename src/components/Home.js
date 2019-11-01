import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";
import { addProduct } from "../actions/addProduct"
import ProductContainer from "./ProductList";

export class Home extends Component {
  state = {};
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <ProductContainer products={this.props.products} 
        addProduct={this.props.addProduct} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    addProduct: state.addProduct
  };
};

export default connect(
  mapStateToProps,
  { getProducts, addProduct }
)(Home);
