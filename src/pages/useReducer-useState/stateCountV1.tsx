/*
 * @Author: KuangPF
 * @Date: 2020-03-27 10:26:48
 * @Description: useState
 * @LastEditTime : 2020-03-27 11:16:03
 * @LastEditors  : KuangPF
 */

// 由于 count 与 frozen 不相互依赖，所以最后 render 为 2
import React, { useState, useEffect, useCallback } from 'react'

const CountApp = () => {
  const [count, setCount] = useState(0)
  const [frozen, setFrozen] = useState(false)

  const increase = useCallback(() => {
    setCount(prevCount => {
      if (frozen) {
        return prevCount
      }
      return prevCount + 1
    })
  }, [frozen])

  useEffect(() => {
    increase()
    setFrozen(true)
    increase()
  }, [increase, setFrozen])

  return <p>count {count}</p>
}

export default CountApp
