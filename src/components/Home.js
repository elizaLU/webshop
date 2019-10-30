import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";
import ProductContainer from "./ProductContainer";

export class Home extends Component {
  state = {};
  componentDidMount() {
    //console.log("state from albumListContainer: ", this.state)
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <h2>Our products</h2>
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
