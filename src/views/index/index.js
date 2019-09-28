import React, { Component } from 'react';
import SvgIcon from "@/components/common/svgIcon/index";
import {    HashRouter as Router,Switch,Link,Redirect,Route} from 'react-router-dom';
import Login from '@/views/login/'
import button from '@/views/button'
import dashcord from '@/views/dashcord'
import {StatisticsHistroy} from '@/api/index';
import menuList from '@/router/config';
import asyncComponent from '@/components/common/AsyncComponent'
class Demo extends Component{
    componentDidMount(){
    
      // var param={
      //   count: 0,
      //   variety: 1
      // }
      // StatisticsHistroy(param).then(()=>{
  
      // }) 
      // console.log(menuList)
      // debugger;
     
    }
    render(){
      const {path} = this.props.match;
    return (
      
      <div style={{height:'1000px'}}> 
        oioioioio
        <SvgIcon iconClass="print"  style={{width:'30px',height:'30px'}} />
        {/* <Route exact path="/home/index"  component={asyncComponent(() => import('@/views/dashcord'))} />
        <Route exact path="/home/ui/button"  component={button} /> */}
      
 
               {
                   
                 menuList.map((r,index) => {
               
                 
                             const route = r => {
                              
                                return (
                                    <Route
                                        key={r.key}
                                        exact
                                        path={ r.key}
                                        component={r.component}
                                     />
                               )
                            }

                      
                          return r.component ? route(r) : r.subs.map(r => route(r));
                        //   return (  <Route
                        //                  key={index}
                        //                  exact
                        //                  path={r.key}
                        //                  component={r.component}
                        //             />)
                        //  })
                      
                     
                 })
                }

                 <Route render={() => <Redirect to="/404" />} /> 
      



    </div>
  
   
    );
  }
  }
  export default Demo;
