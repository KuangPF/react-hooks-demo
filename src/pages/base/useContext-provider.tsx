/*
 * @Author: KuangPF
 * @Date: 2020-03-18 22:53:25
 * @Description: useContext Provider
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-03-18 23:02:17
 */

import React, { useContext } from 'react'

const ThemeContext = React.createContext('🇨🇳')

function Context() {
  const local = useContext(ThemeContext)
  return <p>local: {local}</p>
}

// 使用 useContext 时，也可以使用 Provider 更新 context 的值
function App() {
  return (
    <ThemeContext.Provider value={'🇺🇸'}>
      <Context />
    </ThemeContext.Provider>
  )
}
export default App