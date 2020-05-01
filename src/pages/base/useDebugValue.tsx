/*
 * @Author: KuangPF
 * @Date: 2020-05-01 10:06:35
 * @Description: useDebugValue
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-05-01 10:19:35
 */

import React, { useState, useDebugValue } from 'react'

function useFriendStatus() {
  const [isOnline] = useState(null)
  // 第二个参数只会在打开 React 开发者工具时才会执行 
  useDebugValue(isOnline ? 'Online' : 'Offline')
  return isOnline
}

const UseDebugValueDemo = () => {
  const isOnline = useFriendStatus()

  return (
    <div>
      <p>open react developer tools</p>
      <div>{`useFriendStatus: ${isOnline ? 'Online' : 'Offline'}`}</div>
    </div>
  )
}

export default UseDebugValueDemo
