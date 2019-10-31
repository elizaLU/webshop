import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItems from './CartItems'


export class CartContainer extends Component {
  state = []

  render() {
    if (this.props.addToCart.length === 0 ) {
      return <p>You have no items in your cart</p>
    } else {
      return (
        <div>
          <h1>Your cart</h1>
          <CartItems addToCart={this.props.addToCart} />
        </div>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    addToCart: state.addToCart
  }
}

const mapActionToProps = {
}

export default connect(mapStateToProps, mapActionToProps)(CartContainer)
