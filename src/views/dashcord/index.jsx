import React, { Component } from 'react';
import { connect } from "react-redux"
class Demo extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  change() {
    this.props.add()
  }
  render() {
    let { value } = this.props
    return (
      <div onClick={this.change.bind(this)}>
        首页 {value.addDec}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    value: state
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    add() {
      dispatch({ type: 'ADD' })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
