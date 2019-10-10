import React, { Component } from 'react';
import {connect} from "react-redux"
class Demo extends Component{
    componentDidMount(){ 
    }
    render(){
    return (  
      <div onClick={this.props.changeText}>
        按钮{this.props.value.text.userName}
      </div>
    );
  }
  }
  let mapStateToProps=(state)=> {
    return {
      value: state
    }
  }
  let mapDispatchToProps=(dispatch)=>{
    return {
      changeText(){
        dispatch({type:'TEXT',payLoad:'harry'})
      }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Demo);
