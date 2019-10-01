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
      this._isMounted = true
      const { default: component } = await importComponent()
      if(!this._isMounted){
        return 
      }
      this.setState({
        component: component
      })
    }
    componentWillUnmount() {
      this._isMounted = false
    }
    render() {
      const RenderComponet = this.state.component
      return RenderComponet ? <RenderComponet {...this.props} /> : <div>loading...</div>
    }
  }
  return AsyncComponent
}
export default asyncComponent