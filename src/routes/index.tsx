import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import routes from './routes'

const App = () => {
  const sortedRouters = routes.sort(item => (item.redirect !== undefined ? 1 : -1))
  return (
    <Router>
      <Switch>
        {sortedRouters.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

function RouteWithSubRoutes(route: any) {
  return route.redirect ? (
    <Redirect from={route.path} to={route.redirect} />
  ) : (
    <Route
      path={route.path}
      render={(props: any) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} />
      )}
    />
  )
}

export default App
