import "./App.css"
import Navbar from "./components/layout/Navbar"

import User from "./components/users/User"
import React, { Fragment } from "react"

import Alert from "./components/layout/Alert"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App = () => {
  

  
  

  return (
    <GithubState>
    <AlertState>
    <Router>
      <Fragment>
        <Navbar />

        <div className='container'>
          <Alert/>
          <Switch>
            <Route
              exact
              path='/'
              component={Home}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:login'
              component =  {User}
              
            />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Fragment>
    </Router>
    </AlertState>
    </GithubState>
  )
}

export default App
