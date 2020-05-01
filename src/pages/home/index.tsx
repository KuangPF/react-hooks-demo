/*
 * @Author: KuangPF
 * @Date: 2020-04-01 22:14:34
 * @Description: home page
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-05-01 17:47:59
 */

import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

import routeList from 'routes/routes'

const App = () => {

  const renderSubRoute = useCallback(subRouteList => {
    return subRouteList.map((item, index) => {
      return (
        <li key={index} style={{lineHeight: '22px'}}>
          <Link to={`${item.path}`}>{item.path}</Link>
        </li>
      )
    })
  }, [])
  
  return (
    <div>
      {routeList
        .filter(item => !item.hide)
        .map((item, index) => {
          return (
            <div key={index}>
              <h3>{item.title || item.name}</h3>
              <ul>{renderSubRoute(item.children)}</ul>
            </div>
          )
        })}
    </div>
  )
}

export default App
