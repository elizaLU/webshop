import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state

}



export default connect(mapStateToProps)(Home)
