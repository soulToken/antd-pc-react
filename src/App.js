import React,{Component} from 'react';

import './App.css';
import { Button } from 'antd';
import {  Route} from 'react-router'
import {    HashRouter as Router,Switch,Link} from 'react-router-dom';
import  routers from '@/router/index'
import Index from  "@/views/index/"
console.log(process.env)


class App extends Component {
  componentDidMount(){
 
    var param={
      count: 0,
      variety: 1
    }
 
  }
  render(){
    return  (
     <div className="App">
        <Button className="ac">default</Button>
           <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
           <Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</Button>
          <Router>
              <Switch>
                        <Route exact path='/' component={Index}></Route>
                        {
                          routers.map((item,index)=>{
                              return  <Route path={item.path} component={item.component} key={index} />
                          })
                        }
            </Switch>
    
                 
          </Router>
          
   
     </div>
     )
  }
 
  
}
export default App

