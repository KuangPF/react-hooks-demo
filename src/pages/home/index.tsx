/*
 * @Author: KuangPF
 * @Date: 2020-04-01 22:14:34
 * @Description: home page
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-12 21:22:45
 */

import React from 'react'
import { Link } from 'react-router-dom'

const App = (props: any) => {
  return (
    <div>
      <h3>base</h3>
      <ul>
        <li>
          <Link to="/base/useState">useState</Link>
        </li>
        <li>
          <Link to="/base/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="/base/useRef">useRef</Link>
        </li>
      </ul>
      <h3>custom-hooks</h3>
      <ul>
        <li>
          <Link to="/custom-hooks/useProfile">useProfile</Link>
        </li>
        <li>
          <Link to="/custom-hooks/useInput">useInput</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
