import React, { Component } from 'react';

import './App.css';
import { HashRouter as Router, Switch, Link, Redirect, Route } from 'react-router-dom';
import routers from '@/router/index'
import Index from "@/views/index/"
import intl from 'react-intl-universal';
import {connect} from "react-redux"
import locales from "@/assets/lang"
console.log(process.env)



class App extends Component {
state={
  initDone:false
}
componentDidMount() {
  this.loadLocales();
}
loadLocales() {
  // react-intl-universal 是单例模式, 只应该实例化一次
console.log(intl)
  intl.init({
    currentLocale: this.props.lang, // TODO: determine locale here
    locales,
  })
  .then(() => {
  this.setState({initDone: true});
  });
}
  render() {
    return (
      <div className="App">
        {
          this.state.initDone &&
       
        <Router>
          <Switch>

            <Route path='/' exact render={() => <Redirect to="/home/index"> </Redirect>}></Route>
            {
              routers.map((item, index) => {
                return <Route  path={item.path} component={item.component} key={index} />
              })
            }


          </Switch>


        </Router>
         }

      </div>
    )
  }


}

let mapStateToProps=(state)=>{
  return {
      lang:state.lang
  }
}
let mapDispatchToProps=(dispatch)=>{
    return {
      changeLang(lang){
        dispatch({
          type:'CHANGE_LANG',
          lang
        })
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)

