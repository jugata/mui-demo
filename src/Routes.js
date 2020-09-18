import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import App from './App'
import React from 'react'
import PageOne from "./PageOne"
import OutlinedCard from './OutlinedCard'

import CardContainer from './CardContainer'
import SimpleTable from './SimpleTable'
import Layout from './Layout'
import PageTwo from './PageTwo'
export default function Routes() {
  return (
    <Router>

      <Route path={'/'} component={App} />

      <Route exact path={'/home'} component={SimpleTable} />

      <Route exact path={'/cards'} component={CardContainer} />
      <Layout>
        <Route exact path={'/page1'} component={PageOne} />
        <Route exact path={'/page2'} component={PageTwo} />
      </Layout>




    </Router>
  )
}

