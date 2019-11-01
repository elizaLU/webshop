import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItems from './CartItems'


export class CartContainer extends Component {
  state = {}

  render() {
    if (this.props.addProduct.length === 0) {
      return <p>You have no items in your cart</p>
    } else {
      return (
        <div>
          <h1>Your cart</h1>
          <CartItems addProduct={this.props.addProduct} />
        </div>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    addProduct: state.addProduct
  }
}

const mapActionToProps = {

}

export default connect(mapStateToProps, mapActionToProps)(CartContainer)
