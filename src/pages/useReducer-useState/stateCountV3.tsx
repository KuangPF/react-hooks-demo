/*
 * @Author: KuangPF
 * @Date: 2020-03-29 21:34:25
 * @Description: custom hooks useCount by useState
 * @LastEditors: KuangPF
 * @LastEditTime: 2020-04-06 16:03:28
 */

import React, { useEffect } from 'react'
import useCount from './useCounterApi'

const CountApp = () => {
  const { count, increase, setFrozen } = useCount()

  useEffect(() => {
    increase()
    setFrozen(true)
    increase()
  }, [increase, setFrozen])

  return (
    <p>
      by useCount
      <br />
      current count: {count}
    </p>
  )
}

export default CountApp
