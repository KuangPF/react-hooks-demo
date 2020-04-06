/*
 * @Author: KuangPF
 * @Date: 2020-02-15 11:31:15
 * @Description: useCallback hooks
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-02-15 11:47:20
 */

import React, { useState, useCallback, useEffect } from 'react'

function UseCallbackDemo() {
  const [count, setCount] = useState(0)

  const handleResize = useCallback(() => {
    // 使用 useCallback 让 handleResize 依赖 count
    console.log(`the current count is: ${count}`)
  }, [count])

  useEffect(() => {
    // 不直接依赖 count，而是依赖 handleResize
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click
      </button>
      <p>current count: {count}</p>
    </div>
  )
}

export default UseCallbackDemo
