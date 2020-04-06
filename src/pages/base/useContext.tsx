/*
 * @Author: KuangPF
 * @Date: 2020-02-15 11:55:48
 * @Description: useContext hooks demo
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-02-15 16:02:59
 */

import React, { useContext } from 'react'

const local = '🇨🇳'

function UseContextDemo() {
  const local = useContext(ThemeContext)
  return (
    <div>
      <p>local: {local}</p>
    </div>
  )
}

const ThemeContext = React.createContext(local)
export default UseContextDemo
