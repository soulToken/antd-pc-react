import React, { Component } from 'react';

import {    HashRouter as Router,Link} from 'react-router-dom'
import {connect} from "react-redux"



class Demo extends Component{

    componentDidMount(){
  
   console.log(this.props)
     
    }
    render(){
    return (
      
   <div>
    首页
   </div>
  
   
    );
  }
  }

 let mapStateToProps=(state)=> {
    return {
      value: state
    }
  }
  export default connect(mapStateToProps)(Demo);
