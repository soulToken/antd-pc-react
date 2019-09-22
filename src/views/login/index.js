import React, { Component } from 'react';

import {    HashRouter as Router,Link} from 'react-router-dom'


import './index.less'

class Demo extends Component{
    componentDidMount(){
      var param={
        count: 0,
        variety: 1
      }
     
     
    }
    render(){
    return (
      
      <div style={{height:'1000px'}}>   
          <li><Link to="/">主页</Link></li>
          <li><Link to="/login">登录页面</Link></li>
          <li><Link to="/index"> 主页界面</Link></li>
    </div>
  
   
    );
  }
  }
  export default Demo;
