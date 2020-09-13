import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import App from './App'
import React from 'react'
import PageOne from "./PageOne"
import OutlinedCard from './OutlinedCard'
import Home from "./Home"
import CardContainer from './CardConatiner'
import SimpleTable from './SimpleTable'
export default function Routes() {
  return (
    <Router>

      <Route path={'/'} component={App} />

      <Route exact path={'/home'} component={CardContainer} />
      <Switch>
        <Route exact path={'/page1'} component={SimpleTable} />
        <Route exact path={'/card'} component={OutlinedCard} />
      </Switch>



    </Router>
  )
}

