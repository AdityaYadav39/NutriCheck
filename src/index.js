import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import NotFound from './views/not-found'
import Upload from './views/upload'
import Footer4 from './components/footer4'
import Allergies from './views/allergies'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Upload} path="/upload"/>
        <Route component={Allergies} path="/allergies"/>
        <Route component={NotFound} path="*" />
        <Redirect to="**" />
      </Switch>
      <Footer4></Footer4>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
