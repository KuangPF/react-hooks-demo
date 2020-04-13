import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import routes from './routes'

const GITHUB_URL = '/react-hooks-demo'
const App = () => {
  const nextRoutes = dealRoutes(routes, []).sort(item => (item.redirect !== undefined ? 1 : -1))
  return (
    <Router>
      <Switch>
        {nextRoutes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

function RouteWithSubRoutes(route: any) {
  return route.redirect ? (
    <Redirect exact from={route.path} to={route.redirect} />
  ) : (
    <Route
      exact
      path={route.path}
      render={(props: any) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} />
      )}
    />
  )
}

// 将树形 router 转为平级 router
function dealRoutes(data: any, arr: Array<any>) {
  if (Array.isArray(data) && data.length > 0) {
    /* eslint-disable-next-line */
    data.map(item => {
      if (item.children) {
        dealRoutes(item.children, arr)
      } else {
        item.path = `${GITHUB_URL}${item.path}`
        if (item.redirect) {
          item.redirect = `${GITHUB_URL}${item.redirect}`
        }
        arr.push(item)
      }
    })
  }

  return arr
}
export default App
