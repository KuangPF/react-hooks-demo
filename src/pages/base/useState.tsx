/*
 * @Author: KuangPF
 * @Date: 2020-02-13 19:55:23
 * @Description: react hooks useStat demo
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-05 19:59:12
 */

import React, { useState } from 'react'

function useStateDemo() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
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

export default useStateDemo
