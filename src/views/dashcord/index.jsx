import React, { Component } from 'react';
import { connect } from "react-redux"
import intl from 'react-intl-universal';
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
        {
          intl.get('index.good')
        }
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
