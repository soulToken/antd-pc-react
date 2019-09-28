import React, { Component } from 'react';
function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({
        component: component
      })
    }
    render() {
      const RenderComponet = this.state.component
      return RenderComponet ? <RenderComponet {...this.props} /> : <div>loading...</div>
    }
  }
  return AsyncComponent
}
export default asyncComponent