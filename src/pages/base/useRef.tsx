/*
 * @Author: KuangPF
 * @Date: 2020-02-13 20:17:53
 * @Description: reat hooks useRef demo
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-05-01 15:22:56
 */

import React, { useRef, useEffect, useState } from 'react'

function useRefDemo() {
  const [count, setCount] = useState(0)
  const inputRef = useRef(null as any)
  const countRef = useRef(count)

  const handleFocusInput = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    countRef.current = count
    setTimeout(() => {
      console.log(countRef.current)
    }, 2000)
  }, [count])

  return (
    <div>
      <p>1. 获取 dom 节点</p>
      <input ref={inputRef} />
      <button onClick={handleFocusInput}>click focus</button>
      <p>2. 保存变量</p>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click
      </button>
    </div>
  )
}

export default useRefDemo
