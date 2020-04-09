/*
 * @Author: KuangPF
 * @Date: 2020-02-13 20:17:53
 * @Description: reat hooks useRef demo
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-09 19:59:32
 */

import React, { useRef, useEffect, useState } from 'react'

function useRefDemo() {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)

  useEffect(() => {
    countRef.current = count
    setTimeout(() => {
      console.log(countRef.current)
    }, 2000)
  },[count])
  
  return (
    <div>
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
