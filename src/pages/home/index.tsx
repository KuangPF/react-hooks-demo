/*
 * @Author: KuangPF
 * @Date: 2020-04-01 22:14:34
 * @Description: home page
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-13 19:06:37
 */

import React from 'react'
import { Link } from 'react-router-dom'

const App = (props: any) => {
  return (
    <div>
      <h3>basic</h3>
      <ul>
        <li>
          <Link to="/basic/useState">useState</Link>
        </li>
        <li>
          <Link to="/basic/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/basic/useContext">useContext</Link>
        </li>
      </ul>
      <h3>Additional Hooks</h3>
      <ul>
        <li>
          <Link to="/additional/useReducer">useReducer</Link>
        </li>
        <li>
          <Link to="/additional/useCallback">useCallback</Link>
        </li>
        <li>
          <Link to="/additional/useMemo">useMemo</Link>
        </li>
        <li>
          <Link to="/additional/useRef">useRef</Link>
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
      <h3>hooks vs class</h3>
      <ul>
        <li>
          <Link to="/hooks-class/class-greet">class Greet</Link>
        </li>
        <li>
          <Link to="/hooks-class/hooks-great">hooks Greet</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
