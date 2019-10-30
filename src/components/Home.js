import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../actions/products'

export class Home extends Component {
  state = {}
  componentDidMount() {
    //console.log("state from albumListContainer: ", this.state)
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <h2>Our products</h2>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }

}



export default connect(mapStateToProps, {getProducts})(Home)
