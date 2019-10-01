import React, { Component } from 'react';

import './App.css';
import { HashRouter as Router, Switch, Link, Redirect, Route } from 'react-router-dom';
import routers from '@/router/index'
import Index from "@/views/index/"
console.log(process.env)


class App extends Component {
  componentDidMount() {

    var param = {
      count: 0,
      variety: 1
    }

  }
  render() {
    return (
      <div className="App">

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


      </div>
    )
  }


}
export default App

