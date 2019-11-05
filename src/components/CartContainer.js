import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItems from './CartItems'
import { clearCart } from '../actions/addProduct'


export class CartContainer extends Component {
  state = {}
  clearCart = () => {
    console.log("Clear cart")
    this.props.clearCart()

  }

  render() {
    if (this.props.addProduct.length === 0) {
      return <p>You have no items in your cart</p>
    } else {
      return (
        <div>
          <h1>Your cart</h1>
          <CartItems addProduct={this.props.addProduct} clearCart={this.clearCart} />
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
  clearCart

}

export default connect(mapStateToProps, mapActionToProps)(CartContainer)
