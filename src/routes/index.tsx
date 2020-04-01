import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import routes from './routes'

const App = () => {
  return (
    <Router>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Router>
  )
}

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props: any) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export default App
