import React from 'react'
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'

import Homepage from '../pages/Homepage'
import Redirectpage from '../pages/RedirectPage'
import StatsPage from '../pages/StatsPage'
import NotFoundPage from '../pages/NotFoundPage'


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component= {Homepage}/>
        <Route exact path="/:code" component= {Redirectpage}/>
        <Route exact path="/:code/stats" component= {StatsPage}/>
        <Route exact path="/*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes